import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useLanguage } from '../../contexts/LanguageContext';

interface AddClassDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddClass: (newClass: any) => void;
}

export function AddClassDialog({ open, onOpenChange, onAddClass }: AddClassDialogProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    section: '',
    classTeacher: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddClass({
      ...formData,
      id: `new_class_${Date.now()}`,
      studentCount: 0,
      attendanceRate: 0,
      averageGrade: 0,
      subjects: [],
      sections: [formData.section]
    });
    setFormData({ name: '', section: '', classTeacher: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {language === 'en' ? 'Add New Class' : 'కొత్త తరగతి జోడించండి'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {language === 'en' ? 'Class Name' : 'తరగతి పేరు'}
            </Label>
            <Input
              id="name"
              placeholder="10"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="section" className="text-right">
              {language === 'en' ? 'Section' : 'విభాగం'}
            </Label>
            <Input
              id="section"
              placeholder="A"
              value={formData.section}
              onChange={(e) => setFormData({ ...formData, section: e.target.value })}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="classTeacher" className="text-right">
              {language === 'en' ? 'Class Teacher' : 'తరగతి ఉపాధ్యాయుడు'}
            </Label>
            <Input
              id="classTeacher"
              placeholder="Teacher Name"
              value={formData.classTeacher}
              onChange={(e) => setFormData({ ...formData, classTeacher: e.target.value })}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">
              {language === 'en' ? 'Add Class' : 'తరగతిని జోడించండి'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
