import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHform from "../components/form/PHform";
import PHForm from "../components/form/PHform";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: "A-0001",
  //     password: "admin123",
  //   },
  // });
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastID = toast.loading("Logging In");
    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   navigate(`/${user.role}/dashboard`);
    //   toast.success("Logged In", { id: toastID, duration: 2000 });
    // } catch (error) {
    //   toast.error("something went wrong", { id: toastID, duration: 2000 });
    // }
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <PHInput type="text" name="id" label="ID:" />
      </div>
      <div>
        <PHInput type="text" name="password" label="Password:" />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
