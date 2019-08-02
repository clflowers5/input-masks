# input-masks

Simple, pure, input transformations for masking and filtering inputs.

## Overview

All exported functions are `pure` functions: they return a new string/number/value instead of
mutating the subject.

### Example Usage
```jsx harmony
import { maskCurrency } from 'input-masks';

// Example React usage
function Amount({ amount }) {
  // `amount` is the raw int, 12345
  const formattedAmount = maskCurrency(amount); // '12,345'
  return (
    <div className='loan-amount'>
      {formattedAmount}
    </div>
  );
}
```

With `formik-inputs`
```jsx harmony
import { TextInput, useMasking } from 'formik-inputs';
import { maskDateOfBirth, unmaskDateOfBirth } from 'input-masks';

const DateOfBirth = () => {
  const maskInput = useMasking({ transform: maskDateOfBirth, unmask: unmaskDateOfBirth, delimiter: '/' });
  return (
    <TextInput
      fieldName='dateOfBirth'
      label='application.date-of-birth.label'
      transform={maskInput}
    />
  );
}
```

### Named Exports
* `maskCurrency`
* `unmaskCurrency`
* `maskDateOfBirth`
* `unmaskDateOfBirth`
* `maskEmail`
* `maskPhoneNumber`
* `unmaskPhoneNumber`
* `maskSocialSecurityNumber`
* `unmaskSocialSecurityNumber`
* `filterNumeric`

## Contributing
![Just do it](https://media.giphy.com/media/GcSqyYa2aF8dy/giphy.gif)

Just do it!
