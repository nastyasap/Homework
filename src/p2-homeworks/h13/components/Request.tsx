import {useState} from "react"
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton"
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox"
import {requestApi} from "./RequestApi"

export const Request = () => {
    const [checked, setChecked] = useState(false)
    const [result, setResult] = useState('')

    const postRequest = () => {
        requestApi(checked)
            .then(response => setResult(response.data.errorText + ', ' + response.data.info))
            .catch(error => setResult(error.response.data.errorText + ', ' + error.response.data.info))
    }

    return <div>
        <div><SuperCheckbox checked={checked} onChangeChecked={setChecked}/></div>
        <div><SuperButton onClick={postRequest}>Post request</SuperButton></div>
        {result}
    </div>
}