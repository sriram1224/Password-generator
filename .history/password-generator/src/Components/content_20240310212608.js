import React, { useState } from 'react';
import "./content.css"
const PasswordGenerator = () => {
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];  
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div>
 
      
      <div>
        <input type="text" readOnly value={password} class="text-input"	 />
        <button onClick={copyToClipboard}><i class="fa-solid fa-copy"></i></button>
          </div>
          <div>
        <label>
          Password Length:
          <input type="number" value={passwordLength} onChange={(e) => setPasswordLength(parseInt(e.target.value))} />
        </label>
          </div>
               <div>
        <label>
          <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
          Include Uppercase
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
          Include Lowercase
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
          Include Symbols
        </label>
      </div>
      
          <button onClick={generatePassword} class="generate">Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
