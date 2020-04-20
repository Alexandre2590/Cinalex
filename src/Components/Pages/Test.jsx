import React from "react";
import { useForm } from "react-hook-form";

export default function Test() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(JSON.stringify(formState.dirtyFields));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" name="First name" ref={register({ required: true })} />

      <label>Last name</label>
      <input type="text" name="Last name" ref={register} />

      <label>Email</label>
      <input type="text" name="Email" ref={register} />

      <label>Mobile number</label>
      <input type="tel" name="Mobile number" ref={register} />

      <label>Title</label>
      <select name="Title" ref={register}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <label>Are you a developer?</label>
      <input name="developer" type="radio" value="Yes" ref={register} />
      <input name="developer" type="radio" value="No" ref={register} />

      <pre>{JSON.stringify(formState, null, 2)}</pre>

      <input type="submit" />
    </form>
  );
}
