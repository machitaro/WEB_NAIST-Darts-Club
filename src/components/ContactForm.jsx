import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormField } from '@/components/FormField';
  
export const ContactForm = (props) => {
    const { title, description, formFields, formData, onChange, onSubmit } = props;
    return (
        <Card className="w-full max-w-2xl mx-auto text-main border-0 shadow-none">
            <CardHeader className="pt-0 pb-5 px-5">
                <CardTitle className="text-lg md:text-2xl">{title}</CardTitle>
                <CardDescription className="text-base">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                {formFields.map((field) => (
                    <FormField
                    key={field.id}
                    field={field}
                    value={formData[field.id]}
                    onChange={onChange}
                    />
                ))}
                <Button type="submit" className="w-full text-sm 2xl:text-base border border-transparent text-white bg-main hover:bg-white hover:text-main hover:border-main">
                    送信する
                </Button>
                </form>
            </CardContent>
        </Card>
    );
};