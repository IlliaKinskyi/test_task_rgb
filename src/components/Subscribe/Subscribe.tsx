import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './subscribe.module.scss'
import { useEffect, useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import emailjs from "@emailjs/browser";

interface IFormInput {
    fullName: string
    phone: string
    email: string
  }

export default function Subscribe() {
      const { register, handleSubmit } = useForm<IFormInput>()
      const [phone, setPhone] = useState('');

      useEffect(() => emailjs.init("blhmJpNd6OypszIw-"), []);

      const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const serviceId = "service_x8fc49m";
    const templateId = "template_ju8lwsc";
    try {
      await emailjs.send(serviceId, templateId, {
        name: data.fullName,
        recipient: data.email,
        phone: data.phone
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } 
      }



  return (
    <div className={styles.subscribe}>
        <span className={styles.subscribe__title}>Запишитесь <span className={styles.subscribe__title_red}>бесплатно</span> и получите подарок</span>
        
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("fullName", { required: true})} className={styles.subscribe__input} type='text' placeholder='Ваше имя и фамилия'/>
      <PhoneInput className={styles.subscribe__input_phone} countrySelectorStyleProps={{className:'country'}} inputProps={{className:'phone'}} {...register("phone", { required: true, minLength:17})} placeholder='Ваш номер телефона' defaultCountry="ua" value={phone} onChange={(phone) => setPhone(phone)} />
      <input {...register("email", { required: true, pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        }})} className={styles.subscribe__input} type="email" placeholder='Ваш email' />
      <button type="submit" className={styles.subscribe__submit}>Записаться бесплатно</button>
    </form>

        <span className={styles.subscribe__privacy}>Нажимая на кнопку я согашаюсь <u>с политикой конфидециальности</u></span>
    </div>
  )
}
