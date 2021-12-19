import { ChangeEvent, memo, useState, VFC } from 'react';
import {
  TextField,
  DialogContentText,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { User } from '../../types/index';
import { instance as axios } from '../../plugins/axios';
import Axios from 'axios';

export const SignupForm: VFC = memo((props) => {
  const { register, handleSubmit, control, formState } = useForm<User>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { isDirty, isValid } = formState;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const signupUser: SubmitHandler<User> = async (data: User) => {
    try {
      const res = await axios.post<User>('/api/v1/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log(res);
    } catch (err) {
      if (Axios.isAxiosError(err)) {
        console.log(err.response);
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const changeName = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): string => {
    const str: string = e.target.value;
    return str.trim();
  };

  return (
    <form onSubmit={handleSubmit(signupUser)}>
      <Box>
        <DialogContentText>Name*</DialogContentText>
        <Controller
          name="name"
          control={control}
          rules={{
            required: '名前を入力してください',
          }}
          render={({ field: { onChange }, formState: { errors } }) => (
            <>
              <TextField
                placeholder="例) 中山太郎"
                error={!!errors.name}
                type="text"
                fullWidth
                required
                color="purple"
                helperText={errors.name ? errors.name.message : ' '}
                onChange={(e) => onChange(changeName(e))}
              />
            </>
          )}
        />
      </Box>
      <Box mt={1}>
        <DialogContentText>Email*</DialogContentText>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'メールアドレスを入力してください',
            pattern: {
              value:
                /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i,
              message: 'メールアドレスを正しく入力してください',
            },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              placeholder="例) foo@example.com"
              error={!!errors.email}
              type="email"
              fullWidth
              required
              color="purple"
              helperText={errors.email ? errors.email.message : ' '}
              {...field}
            />
          )}
        />
      </Box>
      <Box mt={1}>
        <DialogContentText>Password*</DialogContentText>
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'パスワードを入力してください',
            min: 8,
            pattern: {
              value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,}$/i,
              message: 'パスワードを正しく入力してください',
            },
          }}
          render={({ field, formState: { errors } }) => (
            <FormControl variant="outlined" fullWidth color="purple">
              <OutlinedInput
                placeholder="8文字以上の半角英数字"
                error={!!errors.password}
                type={showPassword ? 'text' : 'password'}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...field}
              />
              <FormHelperText error={!!errors.password}>
                {errors.password ? errors.password.message : ' '}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Box>
      <Box mt={2}>
        <LoadingButton
          fullWidth
          disabled={!isDirty || !isValid}
          type="submit"
          size="large"
          sx={{ py: 1.4 }}
          color="purple"
        >
          Sign Up
        </LoadingButton>
      </Box>
    </form>
  );
});
