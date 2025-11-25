import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useLanguage } from '../../contexts/LanguageContext';

interface AddTeacherDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddTeacher: (teacher: any) => void;
}

export function AddTeacherDialog({ open, onOpenChange, onAddTeacher }: AddTeacherDialogProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    class: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTeacher({
      ...formData,
      id: `new_${Date.now()}`,
      subjects: formData.subject.split(',').map(s => s.trim()),
      classes: formData.class.split(',').map(c => c.trim()),
      averageScore: 0,
      trend: 'up',
      trendValue: 0
    });
    setFormData({ name: '', email: '', phone: '', subject: '', class: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {language === 'en' ? 'Add New Teacher' : 'కొత్త ఉపాధ్యాయుడిని జోడించండి'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {language === 'en' ? 'Name' : 'పేరు'}
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              {language === 'en' ? 'Email' : 'ఇమెయిల్'}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              {language === 'en' ? 'Phone' : 'ఫోన్'}
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subject" className="text-right">
              {language === 'en' ? 'Subjects' : 'విషయాలు'}
            </Label>
            <Input
              id="subject"
              placeholder="Math, Science"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="class" className="text-right">
              {language === 'en' ? 'Classes' : 'తరగతులు'}
            </Label>
            <Input
              id="class"
              placeholder="10A, 9B"
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              className="col-span-3"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">
              {language === 'en' ? 'Add Teacher' : 'ఉపాధ్యాయుడిని జోడించండి'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
