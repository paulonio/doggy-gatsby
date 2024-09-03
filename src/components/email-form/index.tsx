import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Form, Input, InputWrapper } from './styled';

import Button from '@/components/button';
import Typography from '@/components/typography';
import { sendEmail } from '@/utils/api';

export type FormType = {
  email: string;
};

const schema = yup.object({
  email: yup.string().trim().email('Email must be valid').required(),
});

const EmailForm = () => {
  const [emailValue, setEmailValue] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
    defaultValues: { email: '' },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (errors.email) {
      clearErrors();
    }

    const { value } = e.target;

    setEmailValue(value);
  };

  const onSubmit: SubmitHandler<FormType> = (data) => {
    sendEmail(data, reset);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      Subscribe to our Newsletter
      <InputWrapper>
        <div>
          <Input
            {...register('email')}
            id="mail"
            type="text"
            placeholder="Email"
            name="email"
            value={emailValue}
            onChange={handleInputChange}
            data-testid="email-input"
          />
          <Typography size="s" dataTestId="email-error">
            {errors.email?.message}
          </Typography>
        </div>
        <Button type="submit" dataTestId="email-submit-button">
          Submit
        </Button>
      </InputWrapper>
    </Form>
  );
};

export default EmailForm;
