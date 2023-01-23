let selector = document.querySelector("#phone");
var im = new Inputmask('+7 (999)-999-99-99');
im.mask(selector);

const validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF5C00'
  },
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимальная длина 2 симовола'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Минимальная длина 30 симовола'
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Email обязаьтелбьное поле',
    },
  ])
  .addField('#phone', [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length > 0)
      },
      errorMessage: 'Вы не ввели телефон'
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length === 10)
      },
      errorMessage: 'Введите телефон полностью'
    }
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
  });
