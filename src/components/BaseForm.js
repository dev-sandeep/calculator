import React, { useEffect, useState } from 'react'
import { Tooltip } from 'reactstrap';
// import Form from 'react-bootstrap/Form'

function BaseForm(props) {
    const [data, setData] = useState({
        forms: []
    });
    const [result, setResult] = useState(0);

    const init = () => {
        setData(props.data);
    }
    useEffect(() => {
        init();
    }, props.data);


    const [tooltip, setTooltipData] = useState(false);
    // const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = (id) => {
        setTooltipData({...data, [id]:tooltip[id]?false:true});
    };


    const onChangeText = (key, val) => {
        let index = data.forms.findIndex((inst) => key == inst.label);
        let newObj = data.forms[index];
        newObj.value = val;
        let temp = [...data.forms.slice(0, index), newObj, ...data.forms.slice(index + 1)];

        //calculate result
        let arr = [];
        data.forms.map((inst) => {
            arr.push(parseFloat(inst.value));
        })
        let finalresult = data.result(...arr);
        setResult(currencyFormator(finalresult));
    }

    const currencyFormator = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    /* all of the maon content goes here  */
    return (
        <div className="col-lg-8">
        <div className="card">
            <div className="card-header">
                <p className="card-title font-2">{data? data.title:''}</p>
            </div>
            <div className="card-content collapse show" aria-expanded="true">
                <div className="card-body">
                    <p className="card-text">
                        {data? data.subtitle:''}
                    </p>
                    
                    <div className="form-section">
                        <div className="forms">
                            <div>
                                {(data && data.forms) ? (
                                    data.forms.map((inst, index) => (
                                        <div key={inst.label+index} className="col-lg-12 col-md-12 col-sm-12 p-left-0">
                                            <label>
                                                <Tooltip placement="right" isOpen={tooltip['id-'+index]} target={"id-"+index} toggle={()=>{toggle('id-'+index)}}>
                                                    {inst.explain}
                                                </Tooltip>
                                                <span id={"id-"+index}>
                                                    {inst.label}
                                                </span>
                                            </label>
                                            <input type="number" onChange={(e) => { onChangeText(inst.label, e.target.value) }} className="form-control"
                                            required="" />
                                            <div className="valid-tooltip">
                                            Looks good!
                                            </div>
                                        </div>
                                        
                                    ))
                                ) : (<></>)}

                                <div className="text-right result">
                                    <p>{result}</p>
                                </div>
                                <div className="result-text">
                                    <small>{data?data.result_unit:''}</small>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <span className="text-muted">Developed by, Sandeep Gantait</span>
            </div>
        </div>
    </div>
        
    );
}

export default BaseForm;