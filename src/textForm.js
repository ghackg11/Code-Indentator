import React, {useState} from 'react'


export default function TextForm() {

    const [text, settext] = useState("");

    function onTextChange(event){
        settext(event.target.value);
    }

    function performIdentation(){
        var beautify_js = require('js-beautify');
        var res = beautify_js.js_beautify(text);
        settext(res);
    }

   

    return (
        <div className='container'>
            <div className="mb-3 my-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{fontSize: "20px"}}>Indentate your code in just one click</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" placeholder='Enter the code here' value={text} onChange={onTextChange}></textarea>
            </div>
            <button className='btn btn-primary' type='button' onClick={performIdentation}>Indentate</button>
            
        </div>
    )
}
