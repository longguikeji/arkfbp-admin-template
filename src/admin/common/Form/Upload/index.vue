<template>
  <div>
    <!-- upload -->
    <template>
      <div class="uploadItem">
        <!-- video -->
        <div v-if="state.type === 'video'">
          <el-link
            :href="valueBind"
            target="_blank"
            style="padding: 5px"
          >
            <i class="el-icon-document">{{ valueBind }}</i>
          </el-link>
        </div>
        <!-- image -->
        <div v-else-if="state.type === 'image'">
          <el-image
            style="height: 50px; width: 50px; margin-right: 10px"
            :src="valueBind"
            fit="scale-down"
            :preview-src-list="[valueBind]"
          />
        </div>
        <!-- XlsxFile -->
        <div v-else-if="state.type === 'xlsx'">
          <el-link
            :href="valueBind"
            target="_blank"
          />
        </div>
        <!-- 其他上传 -->
        <div v-else />
        <!-- 上传按钮 -->
        <el-upload
          ref="upload"
          :file-list="fileList"
          :action="state.action"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="onSuccess"
        >
          <el-button type="primary">
            {{ state.title || btnText }}
          </el-button>
        </el-upload>
      </div>
    </template>

    <!-- dialog -->
    <template>
      <el-dialog
        :title="state.title"
        :visible.sync="dialogVisible"
        append-to-body
      >
        <!-- video -->
        <video
          v-if="state.type === 'video'"
          :src="fileUrl"
          style="width:95%;height:auto;"
          controls="controls"
        />
        <!-- image -->
        <div
          v-else-if="state.type === 'image'"
          style="display: flex"
        >
          <div
            v-if="imageUrl"
            :style="{
              width: imgInfo.width + 'px',
              height: imgInfo.height + 'px',
              flex: 'none'
            }"
          >
            <VueCropper
              ref="cropper"
              :src="fileUrl"
              :output-type="'png'"
              :can-scale="false"
              :can-move="false"
              :auto-crop="true"
              :auto-crop-width="200"
              :auto-crop-height="200"
              :fixed="false"
              :fixed-number="state.upload.fixedNumber"
              :fixed-box="state.upload.fixedBox"
              :center-box="true"
              @realTime="realTime"
            />
          </div>
          <div
            v-if="previews"
            :style="{
              width: previews.w + 'px',
              height: previews.h + 'px',
              overflow: 'hidden',
              'margin-left': '20px',
              flex: 'none'
            }"
          >
            <div :style="previews.div">
              <img
                :src="previews.url"
                :style="previews.img"
              >
            </div>
          </div>
        </div>
        <!-- XlsxFile -->
        <div
          v-else-if="state.type === 'xlsx'"
          id="excel-file-box"
        >
          <table id="excel-display-table">
            <tr>
              <th
                v-for="(item, index) in tableHeader"
                :key="index"
              >
                {{ item }}
              </th>
            </tr>
            <tr
              v-for="(itemBody, indexBody) in currentPageTableBody"
              :key="indexBody"
            >
              <td
                v-for="(itemBodyItem, indexBodyIndex) in itemBody"
                :key="indexBodyIndex"
              >
                {{ itemBodyItem }}
              </td>
            </tr>
          </table>

          <el-pagination
            class="excel-display-pager"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableBody.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>

        <div slot="footer">
          <el-button @click="dialogVisible = false">
            取消
          </el-button>
          <el-button
            type="primary"
            @click="submitUpload"
          >
            上传文件
          </el-button>
        </div>
      </el-dialog>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import UploadState from './UploadState'
import { runAction } from '@/arkfbp'
import { VueCropper } from 'vue-cropper'
import XLSX from 'xlsx'
import processTableData from '@/utils/readexcel'
import { log } from 'console'

@Component({
  name: 'Upload',
  components: {}
})
export default class extends Vue {
  btnText = '上传文件';
  dialogVisible = false;
  fileList = [] as any[];
  fileUrl = '';
  file = '';
  valueBind = '';

  imageUrl = '';
  imgInfo = {};
  previews = null;
  bili = 1;
  crop = '';

  fileName = '';
  pagesize = 5;
  currentPage = 1;
  tableHeader = [] as any[];
  tableBody = [] as any[];

  @Prop({ required: true }) state!: UploadState;

  get currentPageTableBody() {
    return this.tableBody.slice(
      (this.currentPage - 1) * this.pagesize,
      this.currentPage * this.pagesize - 1
    )
  }

  onSuccess(file: any, fileList: []) {
    if (fileList.length > 0) {
      this.fileList = [fileList[fileList.length - 1]] // 这一步，是 展示最后一次选择的csv文件
    }
    this.fileUrl = URL.createObjectURL(file.raw)
    this.dialogVisible = true
    if (this.state.type === 'image') {
      const imageUrl = URL.createObjectURL(file.raw)
      const img = new Image()
      img.src = imageUrl
      const vm = this
      img.onload = function() {
        const maxL = 800
        let maxlength = img.height
        if (img.width > img.height) {
          maxlength = img.width
        }
        if (maxlength > maxL) {
          vm.bili = maxL / maxlength
        }
        vm.$set(vm.imgInfo, 'width', Math.round(img.width * vm.bili))
        vm.$set(vm.imgInfo, 'height', Math.round(img.height * vm.bili))
        vm.imageUrl = imageUrl
        vm.dialogVisible = true
      }
    }
    if (this.state.type === 'xlsx') {
      this.fileName = file.name
      // 读取Excel文件内容并显示
      const f = file.raw
      const reader = new FileReader()
      let jsonobject
      reader.onload = (e: any) => {
        const data = e.target.result
        const workbook = XLSX.read(data, {
          type: 'binary'
        })
        jsonobject = XLSX.utils.sheet_to_json(
          workbook.Sheets[workbook.SheetNames[0]]
        )
        const tableData = processTableData(jsonobject)
        this.tableHeader = tableData[0]
        this.tableBody = tableData[1]
      }
      reader.readAsBinaryString(f)
    }
  }

  submitUpload() {
    // 上传文件
    const file = this.fileList[0].raw
    console.log('上传文件', file)
    // runAction({
    //   flow: "@/flows/qiniu/upload", //qiniu云存储方法
    //   inputs: {
    //
    //       file: file,
    //       path: "",
    //       complete: this.uploadComplete
    //
    //   }
    // });
  }

  uploadComplete(fileUrl: any) {
    this.$emit('input', fileUrl)
    this.valueBind = fileUrl
    this.dialogVisible = false
  }

  realTime(data: any) {
    this.previews = data
  }

  handleSizeChange(pageSize: number) {
    this.pagesize = pageSize
  }

  handleCurrentChange(currentPage: number) {
    this.currentPage = currentPage
  }
}
</script>

<style lang="scss" scoped>
.uploadItem {
  display: flex;
  align-items: center;
}
.uploadImage {
  height: 50px;
  width: 50px;
  margin-right: 10px;
}
#excel-display-table {
  width: 100%;
  border: 1px solid #ccc;
}
#excel-display-table > tr {
  display: flex;
}
#excel-display-table > tr:nth-child(odd) {
  background-color: #f2f2f2;
}
#excel-display-table > tr > th {
  border-bottom: 1px solid #ccc;
}
#excel-display-table > tr > td,
#excel-display-table > tr > th {
  flex: 1;
  text-align: center;
  line-height: 30px;
}
.excel-display-pager {
  margin-top: 20px;
}
</style>
