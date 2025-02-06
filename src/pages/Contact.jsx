import React, { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { MainLayout } from "@/layouts/MainLayout";
import { useToast } from "@/hooks/use-toast";

export const Contact = ({ menuItems }) => {
  const formFields = [
    {
      id: 'grade',
      type: 'select',
      label: '学年',
      placeholder: '学年を選択してください',
      required: false,
      options: [
        { value: 'm1', label: 'M1' },
        { value: 'm2', label: 'M2' },
        { value: 'd1', label: 'D1' },
        { value: 'd2', label: 'D2' },
        { value: 'd3', label: 'D3' },
        { value: 'othergrade', label: 'その他' }
      ]
    },
    {
      id: 'division',
      type: 'select',
      label: '学部',
      placeholder: '学部を選択してください',
      required: false,
      options: [
        { value: 'information', label: '情報科学領域' },
        { value: 'bio', label: 'バイオサイエンス領域' },
        { value: 'material', label: '物質創成科学領域' },
        { value: 'otherdivision', label: 'その他' }
      ]
    },
    {
      id: 'name',
      type: 'text',
      label: 'お名前',
      placeholder: 'まるてぃねす(ニックネームでもいいよ)',
      required: true
    },
    {
      id: 'email',
      type: 'email',
      label: 'メールアドレス',
      placeholder: 'example@email.com',
      required: true
    },
    {
      id: 'message',
      type: 'textarea',
      label: 'お問い合わせ内容',
      placeholder: 'お問い合わせ内容を入力してください\n次の活動日はいつ〜？やコラボイベントの相談がしたい！などなど',
      required: true
    }
  ];

  const initialFormData = formFields.reduce((acc, field) => {
    acc[field.id] = "";
    return acc;
  }, {});

  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      toast({
        title: "送信完了!",
        description: "あとで連絡します",
        duration: 5000,
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      toast({
        title: "エラー",
        description: "送信に失敗しました。もう一度お試しください。",
        duration: 5000,
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout menuItems={menuItems}>
      <ContactForm
        title="お問い合わせ"
        description="以下のフォームに必要事項を入力してください。"
        formFields={formFields}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </MainLayout>
  );
};