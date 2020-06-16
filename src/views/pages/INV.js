import React, {useState, useEffect} from "react"
import { getFormSetting } from '../../utility/utility'
import BaseForm from '../../components/BaseForm'

export default function(){

const [data, setData] = useState({});
const init = () => {
    let configData = getFormSetting();
    setData({ ...data, marketSize: configData.inv.data });
}
useEffect(() => {
    init();
}, []);

  return (<BaseForm data={data.marketSize} />);}