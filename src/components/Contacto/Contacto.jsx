import React from "react";
import {
  AlertaCampo,
  ButtonSend,
  ContactoContainer,
  ContactoWrapper,
  Form,
  FormItem,
  Input,
  Label,
  TextArea,
} from "./Contacto.elements";
import { helpHttp } from "./helpHttp";
import { useForm } from "./useForm";

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comment:"",
  };
  
  const validationsForm = (form) => {
    let errors = {};
    let regexName =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    
     let regexComment = /^.{1,255}$/;
  
    if (!form.name.trim()) {
      errors.name = "el campo Nombre es requerido"
    } else if(!regexName.test(form.name.trim())) {
      errors.name = 'El campo nombre solo acepta letras y espacios vacios'
    }
  
   
  
    if (!form.comment.trim()) {
      errors.comment = "el campo comment es requerido"
    }
  
    if (!form.subject.trim()) {
      errors.subject = "el campo subject es requerido"
    } else if(!regexComment.test(form.comment.trim())) {
      errors.comment = 'El campo acepta hasta 255 caracteres'
    }
  
  
  
    return errors;
  };

const Contacto = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
      } = useForm(initialForm, validationsForm);
  return (
    <ContactoContainer>
      <ContactoWrapper>
        <Form onSubmit={handleSubmit} enctype="multipart/form-data">
          <FormItem>
            <Label>Nombre</Label>
            <Input
              name="name"
              placeholder="Nombre"
              type="text"
            //   {...register("name", { required: true })}
            />{" "}
            {errors.name && <AlertaCampo>Ingrese un nombre</AlertaCampo>}
          </FormItem>
          <FormItem>
            <Label>Correo</Label>
            <Input
              placeholder="correo@mail.com"
              name="email"
            //   {...register("email", {
            //     required: true,
            //     pattern:
            //       /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            //   })}
            />
            {errors.email?.type === "required" && (
              <AlertaCampo>Ingrese un mail</AlertaCampo>
            )}{" "}
            {errors.email?.type === "pattern" && (
              <AlertaCampo>Ingrese un mail valido</AlertaCampo>
            )}
          </FormItem>
          <FormItem>
            <Label>Mensaje</Label>
            <TextArea
              placeholder="Mensaje"
              name="comments"
            //   {...register("comments", {
            //     required: true,
            //     minLength: 10,
            //     maxLength: 255,
            //   })}
            />
            {errors.comments?.type === "required" && (
              <AlertaCampo>Ingrese un mensaje</AlertaCampo>
            )}{" "}
            {errors.comments?.type === "minLength" && (
              <AlertaCampo>
                Ingrese un mensaje de mas de 10 caracteres
              </AlertaCampo>
            )}
            {errors.comments?.type === "maxLength" && (
              <AlertaCampo>Has excedido los 255 caracteres</AlertaCampo>
            )}
          </FormItem>
          <ButtonSend type="submit">ENVIAR</ButtonSend>
        </Form>
      </ContactoWrapper>
    </ContactoContainer>
  );
};

export default Contacto;
