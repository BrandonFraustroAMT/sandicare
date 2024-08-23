import { useState, useRef } from 'react';
import './Form.css'

const Form = async () => {
  /* const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  function zf_ValidateAndSubmit(){
		if(zf_CheckMandatory()){
			if(zf_ValidCheck()){
				if(isSalesIQIntegrationEnabled){
					zf_addDataToSalesIQ();
				} 
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	function zf_CheckMandatory() {
		if (!formRef.current) return false;
		const form = formRef.current;
		const zf_MandArray = ['SingleLine', 'SingleLine1']; // Aquí debes definir tus campos obligatorios
		for (let i = 0; i < zf_MandArray.length; i++) {
		  const fieldObj = form[zf_MandArray[i]] as HTMLInputElement | HTMLSelectElement;
		  if (fieldObj) {
			if (fieldObj.nodeName === 'SELECT' && (fieldObj as HTMLSelectElement).value === '-Select-') {
			  zf_ShowErrorMsg(zf_MandArray[i]);
			  return false;
			} else if (fieldObj.value.trim() === '') {
			  zf_ShowErrorMsg(zf_MandArray[i]);
			  return false;
			} else if (fieldObj.type === 'checkbox' && !fieldObj.checked) {
			  zf_ShowErrorMsg(zf_MandArray[i]);
			  return false;
			}
		  }
		}
		return true;
	  }
	  function zf_ValidCheck() {
		if (!formRef.current) return false;
		const form = formRef.current;
		const zf_FieldArray = ['SingleLine', 'SingleLine1']; // Aquí debes definir tus campos que necesitan validación
		let isValid = true;
	
		for (let ind = 0; ind < zf_FieldArray.length; ind++) {
		  const fieldObj = form[zf_FieldArray[ind]] as HTMLInputElement;
		  if (fieldObj) {
			const checkType = fieldObj.getAttribute('checktype');
			if (checkType === 'c2' && !zf_ValidateNumber(fieldObj)) {
			  isValid = false;
			  zf_ShowErrorMsg(zf_FieldArray[ind]);
			  break;
			} else if (checkType === 'c5' && !zf_ValidateEmailID(fieldObj)) {
			  isValid = false;
			  zf_ShowErrorMsg(zf_FieldArray[ind]);
			  break;
			}
			// Agrega más validaciones según sea necesario
		  }
		}
		return isValid;
	  }
	  function zf_ShowErrorMsg(uniqName: string) {
		setErrors((prevErrors) => ({
		  ...prevErrors,
		  [uniqName]: 'Error en el campo ' + uniqName,
		}));
	  }
	
	  function zf_ValidateNumber(elem: HTMLInputElement): boolean {
		const validChars = '-0123456789';
		const numValue = elem.value.trim();
		if (numValue) {
		  for (let i = 0; i < numValue.length; i++) {
			const strChar = numValue.charAt(i);
			if (validChars.indexOf(strChar) === -1 || (strChar === '-' && i !== 0)) {
			  return false;
			}
		  }
		}
		return true;
	  }
	
	  function zf_ValidateEmailID(elem: HTMLInputElement): boolean {
		const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailExp.test(elem.value.trim());
	  } */
	/* function zf_ValidCheck(){
		var isValid = true;
		for(let ind = 0 ; ind < zf_FieldArray.length ; ind++ ) {
			var fieldObj=document.forms.form[zf_FieldArray[ind]];
		  	if(fieldObj) {
		  		if(fieldObj.nodeName != null ){
			  		var checkType = fieldObj.getAttribute("checktype");
			  		if( checkType == "c2" ){// No I18N
			  			if( !zf_ValidateNumber(fieldObj)){
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}else if( checkType == "c3" ){// No I18N
			  			if (!zf_ValidateCurrency(fieldObj) || !zf_ValidateDecimalLength(fieldObj,10) ) {
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}else if( checkType == "c4" ){// No I18N
			  			if( !zf_ValidateDateFormat(fieldObj)){
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}else if( checkType == "c5" ){// No I18N
			  			if (!zf_ValidateEmailID(fieldObj)) {
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}else if( checkType == "c6" ){// No I18N
			  			if (!zf_ValidateLiveUrl(fieldObj)) {
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
							}
			  		}else if( checkType == "c7" ){// No I18N
			  			if (!zf_ValidatePhone(fieldObj)) {
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
							}
			  		}else if( checkType == "c8" ){// No I18N
			  			zf_ValidateSignature(fieldObj);
			  		}
			  	}
		  	}
		}
         	return isValid;
	}
	function zf_ShowErrorMsg(uniqName:any){
		var fldLinkName;
		for(let errInd = 0 ; errInd < zf_FieldArray.length ; errInd ++ ) {
			fldLinkName = zf_FieldArray[errInd].split('_')[0];
			document.getElementById(fldLinkName+"_error").style.display = 'none';
		}
		var linkName = uniqName.split('_')[0];
		document.getElementById(linkName+"_error").style.display = 'block';
	}
	function zf_ValidateNumber(elem:any) {
	 	var validChars = "-0123456789";
	 	var numValue = elem.value.replace(/^\s+|\s+$/g, '');
	 	if (numValue != null && !numValue == "") {
	 		var strChar;
	 		var result = true;
	 		if (numValue.charAt(0) == "-" && numValue.length == 1) {
	 			return false;
	 		}
	 		for ( let i = 0; i < numValue.length && result == true; i++) {
	 			strChar = numValue.charAt(i);
	 			if ((strChar == "-") && (i != 0)) {
	 				return false;
	 			}
	 			if (validChars.indexOf(strChar) == -1) {
	 				result = false;
	 			}
	 		}
	 		return result;
	 	} else {
	 		return true;
	 	}
	 }
	 function zf_ValidateDateFormat(inpElem:any){
	 	var dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
	 	if( dateValue == "" ){
	 		return true;
	 	}else{
			return( zf_DateRegex.test(dateValue) );
		}
	 }
	 function zf_ValidateCurrency(elem:any) {
	 	var validChars = "0123456789.";
	 	var numValue = elem.value.replace(/^\s+|\s+$/g, '');
	 	if(numValue.charAt(0) == '-'){
	 		numValue = numValue.substring(1,numValue.length);
	 	}
	 	if (numValue != null && !numValue == "") {
	 		var strChar;
	 		var result = true;
	 		for (let i = 0; i < numValue.length && result == true; i++) {
	 			strChar = numValue.charAt(i);
	 			if (validChars.indexOf(strChar) == -1) {
	 				result = false;
	 			}
	 		}
	 		return result;
	 	} else {
	 		return true;
	 	}
	 }
	 function zf_ValidateDecimalLength(elem:any ,decimalLen:any) {
	 	var numValue = elem.value;
	 	if (numValue.indexOf('.') >= 0) {
	 		var decimalLength = numValue.substring(numValue.indexOf('.') + 1).length;
	 		if (decimalLength > decimalLen) {
	 			return false;
	 		} else {
	 			return true;
	 		}
	 	}
	 	return true;
	 }
	 function zf_ValidateEmailID(elem:any) {
        var check = 0;
        var emailValue = elem.value;
        if (emailValue != null && !emailValue == "") {
            var emailArray = emailValue.split(",");
            for (let i = 0; i < emailArray.length; i++) {
                var emailExp = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
                if (!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ''))) {
                    check = 1;
                }
            }
            if (check == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    function zf_ValidateLiveUrl(elem:any) {
    	var urlValue = elem.value;
		if(urlValue !== null && typeof(urlValue) !== "undefined") {
			urlValue = urlValue.replace(/^\s+|\s+$/g, '');
			if(urlValue !== "") {
      			var urlregex = new RegExp("^(((https|http|ftps|ftp)://[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*)+(:\\d{1,5})?)|((w|W){3}(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*){2,}(:\\d{1,5})?)|([a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*)+(:\\d{1,5})?))(/[-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$", "i"); // This regex is taken from LiveFieldsUtil.isValidWebSiteFieldURL() method. Changes: i) Add ^ at the beginning and $ at the end. ii) Remove ?i before https and adjust () around https. iii) Add "i" in the RegExp constructor. // No I18N
				return(urlregex.test(urlValue));
			}
        }
        return true;
    }
    function zf_ValidatePhone(inpElem:any){

        var ZFPhoneRegex = {
            PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
            PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
            PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
            PHONE_USA_REG: /^[0-9]+$/,
            PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/
        }
    	var phoneFormat = parseInt(inpElem.getAttribute("phoneFormat"));
    	var fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, '');
    	var toReturn = true ;
    	if( phoneFormat === 1 ){
    		if(inpElem.getAttribute("valType") == 'code'){
                var codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
                if(fieldInpVal != "" && !codeRexp.test(fieldInpVal)){
		           return false;
				}
    		}else{
				var IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
				if(inpElem.getAttribute("phoneFormatType") == '2'){
					IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
				}
	 			if (fieldInpVal != "" && !IRexp.test(fieldInpVal)) {
	 				toReturn = false;
	 				return toReturn;
	 			}
 		    }
 			return toReturn;
    	}else if( phoneFormat === 2 ){
    		var InpMaxlength = inpElem.getAttribute("maxlength");
    		var USARexp = ZFPhoneRegex.PHONE_USA_REG;
    		if  ( fieldInpVal != "" && USARexp.test(fieldInpVal) &&  fieldInpVal.length == InpMaxlength ) {
				toReturn = true;
			}else if( fieldInpVal == "" ){
				toReturn = true;
			}else{
				toReturn = false;
			}
			return toReturn;
    	}
    }

  function zf_ValidateSignature(objElem:any) {
  		var linkName = objElem.getAttribute("compname");
  		var canvasElem = document.getElementById("drawingCanvas-"+linkName);
  		var isValidSign = zf_IsSignaturePresent(objElem,linkName,canvasElem);
   		var hiddenSignInputElem = document.getElementById("hiddenSignInput-"+linkName);
		if(isValidSign){
			hiddenSignInputElem.value = canvasElem.toDataURL();
		}else{
			hiddenSignInputElem.value = "";// No I18N
		}
		return isValidSign;
  	}

  	function zf_MandatoryCheckSignature(objElem:any){
  		var linkName = objElem.getAttribute("compname");
  		var canvasElem = document.getElementById("drawingCanvas-"+linkName);
  		var isValid = zf_IsSignaturePresent(objElem,linkName,canvasElem);
		return isValid;
  	}

  	function zf_IsSignaturePresent(objElem:any ,linkName:any ,canvasElem:any ){
   		var context = canvasElem.getContext('2d'); // No I18N
   		var canvasWidth = canvasElem.width;
   		var canvasHeight = canvasElem.height;
   		var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
   		var signLen = canvasData.data.length;
   		var flag = false;
   		for(var index =0; index< signLen; index++) {
   	     	if(!canvasData.data[index]) {
   	       		flag =  false;
   	     	}else if(canvasData.data[index]) {
   		   		flag = true;
   		   		break;
   	     	}
   		}
		return flag;
  	}

	function zf_FocusNext(elem:any ,event:any ) {
	 	if(event.keyCode == 9 || event.keyCode == 16){
	      return;
	    }
	    if(event.keyCode >=37 && event.keyCode <=40){
	       return;
	    }
	    var compname = elem.getAttribute("compname");
	    var inpElemName = elem.getAttribute("name");
	 	if (inpElemName == compname+"_countrycode") {
	 		if (elem.value.length == 3) {
	 			document.getElementsByName(compname+"_first")[0].focus();
	 		}
	 	} else if (inpElemName == compname+"_first" ) {
	 		if (elem.value.length == 3) {
	 			document.getElementsByName(compname+"_second")[0].focus();
	 		}
	 	}
	} */
  return (
    <main>
      <div className='form-container'>
        <div className="zf-templateWidth">
          <form action='https://forms.zohopublic.com/jorgecueto/form/FormExample/formperma/LdnVYcN9vwM0Y1kVw5Q10CHQtRhURiXxhjn01N_WWZQ/htmlRecords/submit' name='form' method='POST' accept-charset='UTF-8' id='form'>
            <input type="hidden" name="zf_referrer_name" value="" />{/* <!-- To Track referrals , place the referrer name within the " " in the above hidden input field --> */}
            <input type="hidden" name="zf_redirect_url" value=""/>{/* <!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --> */}
            <input type="hidden" name="zc_gad" value=""/>{/* <!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --> */}
            <div className="zf-templateWrapper">{/* <!---------template Header Starts Here----------> */}
                <ul className="zf-tempHeadBdr">
                    <li className="zf-tempHeadContBdr">
                        <h2 className="zf-frmTitle">
                            Completa el formulario y nos pondremos en contacto contigo lo antes posible
                        </h2>
                        <p className="zf-frmDesc"></p>
                        <div className="zf-clearBoth"></div>
                    </li>
                </ul>{/* <!---------template Header Ends Here----------> */}
                {/* <!---------template Container Starts Here----------> */}
                <div className="zf-subContWrap zf-topAlign">
                  <ul>
                    {/* <!---------Single Line Starts Here----------> */}
                    <li className="zf-tempFrmWrapper zf-large">
                      <div className='inputs'>
                        <label className="zf-labelName"></label>
                        <div className="zf-tempContDiv">
                          <span> 
                            <input type="text" name="SingleLine" checkType="c1" value="" maxlength="255" fieldType={1} placeholder="Nombre"/>
                          </span> 
                          <p id="SingleLine_error" className="zf-errorMessage" style={{display:"none"}}>Invalid value</p>
                        </div>
                        <div className="zf-clearBoth"></div>
                        
                      </div>
                      <div className='inputs'>
                        <label className="zf-labelName"> </label>
                        <div className="zf-tempContDiv">
                          <span> 
                            <input type="text" name="SingleLine1" checkType="c1" value="" maxlength="255" fieldType={1} placeholder="Apellido"/>
                          </span> 
                          <p id="SingleLine1_error" className="zf-errorMessage" style={{display:"none"}}>Invalid value</p>
                        </div>
                        <div className="zf-clearBoth"></div>

                      </div>
                    </li>{/* <!---------Single Line Ends Here----------> */}
                    {/* <!---------Phone Starts Here---------->  */}
                    <li  className="zf-tempFrmWrapper zf-large">
                      <div className='inputs'>
                        <label className="zf-labelName"> </label>
                        <div className="zf-tempContDiv zf-phonefld">
                          <div className="zf-phwrapper zf-phNumber">
                            <span> 
                              <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" maxlength="20" checktype="c7" value="" phoneFormat="1" isCountryCodeEnabled={false} fieldType="11" id="international_PhoneNumber_countrycode" valType="number" phoneFormatType="1" placeholder="Telefono" />
                            </span>
                            <div className="zf-clearBoth"></div>
                          </div>
                          <p id="PhoneNumber_error" className="zf-errorMessage" style={{display:"none"}}>Invalid value</p>
                        </div>
                        <div className="zf-clearBoth"></div>

                      </div>
                      <div className='inputs'>
                        <label className="zf-labelName"></label>
                        <div className="zf-tempContDiv">
                          <span> 
                            <input fieldType={9}  type="text" maxlength="255" name="Email" checktype="c5" value="" placeholder="Email"/>
                          </span> 
                          <p id="Email_error" className="zf-errorMessage" style={{display:"none"}}>Invalid value</p>
                        </div>
                        <div className="zf-clearBoth"></div>

                      </div>
                    </li>
                    {/* <!---------Dropdown Starts Here----------> */}
                    <li className="zf-tempFrmWrapper zf-large">
                      <label className="zf-labelName"></label>
                      <div className="zf-tempContDiv">
                        <select className="zf-form-sBox" name="Dropdown1" checktype="c1">
                          <option selected="true" value="-Select-">&iquest;Necesitas bienestar personal o para los colaboradores de una empresa&#x3f;</option>
                          <option value="Bienestar&#x20;y&#x20;Salud&#x20;personal">Bienestar y Salud personal</option>
                          <option value="Bienestar&#x20;y&#x20;Salud&#x20;para&#x20;los&#x20;colaboradores">Bienestar y Salud para los colaboradores</option>
                        </select>
                        <p id="Dropdown1_error" className="zf-errorMessage" style={{display:"none"}}>Invalid value</p>
                      </div>
                      <div className="zf-clearBoth"></div>
                    </li>{/* <!---------Dropdown Ends Here----------> */}
                  </ul>
                </div>{/* <!---------template Container Starts Here----------> */}
                <ul>
                  <li className="zf-fmFooter">
                    <button className="zf-submitColor" >Submit</button>
                  </li>
                </ul>
              </div>{/* <!-- 'zf-templateWrapper' ends --> */}
            </form>
          </div>
      </div>
    </main>
  );
}

export default Form;