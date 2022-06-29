import React from 'react';
import { useForm } from "react-hook-form";

export default function Formnew() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      itemName: "bill",
      description: "luo",
      email: "bluebill1049@hotmail.com"
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("itemName", { required: true, maxLength: 20 })} />

      <input {...register("description")} />

      <input {...register("email")} />


      <label> Category</label>
          <div className='form-control'>
            <select name="category" {...register("category")}>
              <option value="0">Choose a category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

<label>Mobile number</label>
      <input
        type="tel"
        {...register("Mobile number", {
          required: true,
          maxLength: 11,
          minLength: 8
        })}
      />


      <button type="submit">Submit</button>
    </form>

 
    )
}

