import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import './App.css';
import bgHeader from '@/assets/bg-header.png';
import bgFooter from '@/assets/bg-footer.png';
import butDefault from '@/assets/but-dfault.png';
// import butVariant from '@/assets/but-variant.png';
import { formSchema } from '@/db/schema';

type FormValues = z.infer<typeof formSchema>;

const INDUSTRY_OPTIONS = [
  { value: "科技業", label: "科技業" },
  { value: "醫療產業", label: "醫療產業" },
  { value: "金融業", label: "金融業" },
  { value: "教育領域", label: "教育領域" },
  { value: "other", label: "other" },
];

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  });

  const industry = watch("industry");
  // const attendDinner = watch("attendDinner");
  // const diet = watch("diet");

  const onSubmit = (values: FormValues) => {
    console.log("表單資料:", values);
    alert("送出成功！");
  };

  return (
    <>
      <main className='bg-primary-100'>
        <div className='container'>
          {/* Header */}
          <div style={{ backgroundImage: `url(${bgHeader})`}} className='bg-cover bg-no-repeat bg-center'>
            <p className='pt-14 pb-32 text-primary-200 text-5xl font-semibold'>
              線上會議報名表
            </p>
          </div>
          {/* Form */}
          <div className='bg-white'>
            <form id="meetingForm" onSubmit={handleSubmit(onSubmit)} className='px-10 text-left space-y-10'>
              <div className="space-y-2">
                <label className="font-tital">姓名 *</label>
                <input type="text" placeholder="請輸入姓名" className={`${errors.name? 'input-error' : 'input-base'}`} {...register("name")}/>
                <p className="error-message">{errors.name?.message}</p>
              </div>
              <div className="space-y-2">
                <label className="font-tital">常用信箱 *</label>
                <input type="text" placeholder="請輸入信箱" className={`${errors.email? 'input-error' : 'input-base'}`} {...register("email")}/>
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <div className="space-y-2">
                <label className="font-tital">手機號碼 *</label>
                <input type="text" placeholder="請輸入手機號碼" className={`${errors.phone? 'input-error' : 'input-base'}`} {...register("phone")}/>
                <p className="error-message">{errors.phone?.message}</p>
              </div>
              <div className="space-y-2">
                <label className="font-tital">服務單位 *</label>
                <input type="text" placeholder="請輸入服務單位" className={`${errors.company? 'input-error' : 'input-base'}`} {...register("company")}/>
                <p className="error-message">{errors.company?.message}</p>
              </div>
              <div className="space-y-2">
                <label className="font-tital">工作產業類別 *</label>
                <select {...register("industry")} className={`${errors.company? 'input-error' : 'input-base'}`}>
                    {INDUSTRY_OPTIONS.map((option, index) => (<option key={index} value={option.value} className="bg-primary-100">{option.label}</option>))}
                  </select>
                <p className="error-message">{errors.company?.message}</p>
                {industry === 'other' && (
                  <div>
                    <input type="text" placeholder="請輸入服務單位" className={`${errors.otherIndustry? 'input-error' : 'input-base'}`} {...register("otherIndustry")}/>
                    <p className="error-message">{errors.otherIndustry?.message}</p>
                  </div>
                )}
              </div>
              <div>
                <label className="font-tital">欲參與的會議場次(複選題) *</label>
                <div className="space-y-2">
                  <label className="block font-tital">
                    <input type="checkbox" value="A" className=" checked:accent-primary-200" {...register("sessions")} /> Sessions A
                  </label>
                  <label className="block font-tital">
                    <input type="checkbox" value="B" className=" checked:accent-primary-200" {...register("sessions")} /> Sessions  B
                  </label>
                  <label className="block font-tital">
                    <input type="checkbox" value="C" className=" checked:accent-primary-200" {...register("sessions")} /> Sessions  C
                  </label>
                  <label className="block font-tital">
                    <input type="checkbox" value="D" className=" checked:accent-primary-200" {...register("sessions")} /> Sessions  D
                  </label>
                </div>
                <p className="error-message">{errors.sessions?.message}</p>
              </div>
              <div className="text-center">
                <button type="submit" form="meetingForm"
                  style={{ backgroundImage: `url(${butDefault})` }}
                  className="w-40 h-12 bg-cover bg-center cursor-pointer"></button>
              </div>
            </form>
          </div>
          {/* Footer */}
          <img className="w-full h-full bg-cover rounded-lg" src={bgFooter} alt="{news.title}" />
        </div>
      </main>
    </>
  )
}

export default App
