import { APINode } from 'arkfbp/lib/apiNode'
import { getToken } from '@/utils/auth'
export class TokenAPINode extends APINode {
  headers = {
    Authorization: 'Token ' + getToken()
  }
}
