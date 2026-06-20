import React from 'react';
import { useResumeStore } from '../../store/resumeStore';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Eye, EyeOff, LayoutGrid } from 'lucide-react';

// Sortable Item Component
function SortableSectionItem({ id, label }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-between p-3.5 bg-gray-50/50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-xl select-none transition ${
        isDragging ? 'shadow-xl border-emerald-500 bg-emerald-50 dark:bg-slate-800/80' : 'hover:border-emerald-300 dark:hover:border-white/10'
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Drag Handle */}
        <button
          {...attributes}
          {...listeners}
          className="text-gray-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 cursor-grab active:cursor-grabbing p-1 rounded hover:bg-gray-100 dark:hover:bg-white/5 transition"
          aria-label="Drag to reorder"
        >
          <GripVertical className="w-4 h-4" />
        </button>
        <span className="text-xs font-semibold text-gray-700 dark:text-slate-200">{label}</span>
      </div>
      <div className="text-[10px] text-gray-400 dark:text-slate-500 font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-slate-950 border border-gray-200 dark:border-white/5">
        Moveable
      </div>
    </div>
  );
}

export default function SectionManager() {
  const { sectionOrder, setSectionOrder } = useResumeStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Require dragging 8px before activating, allowing button clicks
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const sectionLabels = {
    summary: 'Professional Summary',
    experience: 'Work Experience',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    certifications: 'Certifications',
    languages: 'Languages',
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = sectionOrder.indexOf(active.id);
      const newIndex = sectionOrder.indexOf(over.id);
      const newOrder = arrayMove(sectionOrder, oldIndex, newIndex);
      setSectionOrder(newOrder);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
          Section Order
        </h3>
        <p className="text-xs text-gray-400 dark:text-slate-400">
          Drag and drop sections to rearrange the layout of your resume. Reordering takes effect in real-time.
        </p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sectionOrder}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {sectionOrder.map((sectionId) => (
              <SortableSectionItem
                key={sectionId}
                id={sectionId}
                label={sectionLabels[sectionId] || sectionId}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
