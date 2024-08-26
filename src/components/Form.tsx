'use client';

import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
  	SingleLine: '',
  	SingleLine1: '',
  	PhoneNumber_countrycode: '',
  	Email: '',
  	Dropdown1: '-Select-',
    UrlBack: '',  // Agrega el estado para el campo oculto
    captchaResponse: '', // Captcha response, si decides implementarlo
    });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Captura la URL de referencia cuando la página se carga
    const referrer = document.referrer || window.location.href;
    setFormData((prevData) => ({
      ...prevData,
      UrlBack: referrer,
    }));
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const zf_ValidateAndSubmit = () => {
    if (zf_CheckMandatory() && zf_ValidCheck()) {
  		if (captchaValue) {
        formRef.current?.submit();
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          captcha: 'Por favor completa el CAPTCHA',
        }));
      }
    }
    return false;
  }
  
  const zf_CheckMandatory = () =>  {
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
  
  const zf_ValidCheck = () => {
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
  
  const zf_ShowErrorMsg = (uniqName: string) =>  {
    setErrors((prevErrors) => ({
  	...prevErrors,
  	[uniqName]: 'Error en el campo ' + uniqName,
    }));
  }
  
  const zf_ValidateNumber = (elem: HTMLInputElement): boolean => {
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
  
  const zf_ValidateEmailID = (elem: HTMLInputElement): boolean => {
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailExp.test(elem.value.trim());
  }
  
  return (
    <main>
      <div className='form-container'>
        <div className="zf-templateWidth">
          <form action='https://forms.zohopublic.com/jorgecueto/form/FormExample/formperma/LdnVYcN9vwM0Y1kVw5Q10CHQtRhURiXxhjn01N_WWZQ/htmlRecords/submit' onSubmit={(e) => { e.preventDefault(); zf_ValidateAndSubmit(); }} name='form' method='POST' acceptCharset='UTF-8' id='form' ref={formRef}>
            <input type="hidden" name="zf_referrer_name" value="" />{/* <!-- To Track referrals , place the referrer name within the " " in the above hidden input field --> */}
            <input type="hidden" name="zf_redirect_url" value=""/>{/* <!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --> */}
            <input type="hidden" name="zc_gad" value=""/>{/* <!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --> */}
            <input type="hidden" name="UrlBack" value="" />
            <div className="zf-templateWrapper">{/* <!---------template Header Starts Here----------> */}
                {/* <ul className="zf-tempHeadBdr">
                    <li className="zf-tempHeadContBdr">
                        <h2 className="zf-frmTitle">
                            Completa el formulario y nos pondremos en contacto contigo lo antes posible
                        </h2>
                        <p className="zf-frmDesc"></p>
                        <div className="zf-clearBoth"></div>
                    </li>
                </ul> */}
                {/* <!---------template Container Starts Here----------> */}
                <div className="zf-subContWrap zf-topAlign">
                  <ul>
                    {/* <!---------Single Line Starts Here----------> */}
                    <li className="zf-tempFrmWrapper zf-large">
                      <div className='inputs'>
                        <label className="zf-labelName"></label>
                        <div className="zf-tempContDiv">
                          <span> 
                            <input type="text" name="SingleLine" maxLength={255} placeholder="Nombre"
								value={formData.SingleLine}
								onChange={handleChange}/>
                          </span> 
                          {errors.SingleLine && <p className="zf-errorMessage">{errors.SingleLine}</p>}
                        </div>
                        <div className="zf-clearBoth"></div>
                        
                      </div>
                      <div className='inputs'>
                        <label className="zf-labelName"> </label>
                        <div className="zf-tempContDiv">
                          <span> 
                            <input type="text" name="SingleLine1" maxLength={255} placeholder="Apellido"
								value={formData.SingleLine1} onChange={handleChange}/>
                          </span> 
                          {errors.SingleLine1 && <p className="zf-errorMessage">{errors.SingleLine1}</p>}
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
                              <input type="text" name="PhoneNumber_countrycode" maxLength={20} id="international_PhoneNumber_countrycode" placeholder="Telefono" value={formData.PhoneNumber_countrycode} onChange={handleChange}/>
                            </span>
                            <div className="zf-clearBoth"></div>
                          </div>
                          {errors.PhoneNumber_countrycode && <p className="zf-errorMessage">{errors.PhoneNumber_countrycode}</p>}
                        </div>
                        <div className="zf-clearBoth"></div>

                      </div>
                      <div className='inputs'>
                        <label className="zf-labelName"></label>
                        <div className="zf-tempContDiv">
                          <span> 
                            <input  type="text" maxLength={255} name="Email" placeholder="Email"
								value={formData.Email} onChange={handleChange}/>
                          </span> 
                          {errors.Email && <p className="zf-errorMessage">{errors.Email}</p>}
                        </div>
                        <div className="zf-clearBoth"></div>

                      </div>
                    </li>
                    {/* <!---------Dropdown Starts Here----------> */}
                    <li className="zf-tempFrmWrapper zf-large">
                      <label className="zf-labelName"></label>
                      <div className="zf-tempContDiv">
                        <select className="zf-form-sBox" name="Dropdown1" value={formData.Dropdown1}
                        onChange={handleChange}>
                          <option selected={true} value="-Select-">&iquest;Necesitas bienestar personal o para los colaboradores de una empresa&#x3f;</option>
                          <option value="Bienestar&#x20;y&#x20;Salud&#x20;personal">Bienestar y Salud personal</option>
                          <option value="Bienestar&#x20;y&#x20;Salud&#x20;para&#x20;los&#x20;colaboradores">Bienestar y Salud para los colaboradores</option>
                        </select>
                        {errors.Dropdown1 && <p className="zf-errorMessage">{errors.Dropdown1}</p>}
                      </div>
                      <div className="zf-clearBoth"></div>
                    </li>{/* <!---------Dropdown Ends Here----------> */}
                    <li className="tempFrmWrapper small" style={{display:"none;"}} id="Website-li"> 
                      <label className="zf-labelName"></label>
                        <div className="zf-tempContDiv">
                          <span> 
                            <input  type="text" maxLength={255} name="Email" placeholder="Email" value={formData.Email} onChange={handleChange}/>
                          </span> 
                          {errors.Email && <p className="zf-errorMessage">{errors.Email}</p>}
                        </div>
                        <div className="zf-clearBoth"></div>
                      <label className="labelName" htmlFor="Website-arialabel"></label>
                      <div className="subFrmFieldsHidden subFrmFieldsHiddenCont">
                        <em>
                          <svg className="icon icon-Denied-1-01">
                            <use xlinkHref="#icon-rules-denied-01"></use>
                          </svg>
                        </em>
                        <span>N/A</span>
                      </div>
                      <div className="tempContDiv">
                        <span> 
                          <input id="Website-arialabel" aria-describedby="hint-Website" inputMode="url" autoComplete="off" type="text" maxLength={2083} name="Website" value={formData.UrlBack} placeholder="URL Origen" />
                        </span>
                      </div>
                      <div className="clearBoth"></div></li>
                  </ul>
                </div>{/* <!---------template Container Starts Here----------> */}
                <div className='captcha-container'>
                  <ReCAPTCHA
                    sitekey="6Lec_S0qAAAAAF5lC1FVAZQW3jqeB_V6LoR2foMn"
                    onChange={handleCaptchaChange}
                    className="captcha"
                  />
                  {errors.captcha && <p>{errors.captcha}</p>}
                </div>
                <ul>
                  <li className="zf-fmFooter">
					          <div className="zf-submit" id="zf_submit" onClick={zf_ValidateAndSubmit}>
                      <input type="submit" id="formsubmit" value="Enviar" className="zf-submitColor" title="Enviar" />
                    </div>
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