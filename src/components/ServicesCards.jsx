import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const initialServices = [
  {
    id: "web",
    icon: "💻",
    title: "Web Design",
    description:
      "Custom-crafted websites that reflect your brand's identity, optimized for performance and user engagement.",
  },
  {
    id: "responsive",
    icon: "📱",
    title: "Responsive Development",
    description:
      "Ensuring seamless experiences across all devices with mobile-first, fully responsive layouts.",
  },
  {
    id: "seo",
    icon: "🚀",
    title: "SEO Optimization",
    description:
      "Improve your search rankings and drive more organic traffic with smart keyword strategies and on-page SEO.",
  },
];

function SortableCard({ service }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: service.id });
  const style = {
    transform: CSS.Transform.toString(
      isDragging ? { ...transform, scaleX: 1.1, scaleY: 1.1 } : transform
    ),
    transition,
    zIndex: isDragging ? 50 : "auto",
  };

  const cardClasses = `
    bg-[#0b0f19] border border-purple-500 p-8 rounded-xl shadow-md transition-shadow
    ${
      isDragging
        ? "shadow-[0_0_20px_rgba(192,132,252,0.6)] scale-110"
        : "hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] hover:scale-105"
    }
    cursor-grab active:cursor-grabbing
  `;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cardClasses.trim()}
    >
      <div className='text-5xl mb-4'>{service.icon}</div>
      <h3 className='text-2xl font-bold mb-2 text-purple-300'>
        {service.title}
      </h3>
      <p className='text-gray-400 text-sm'>{service.description}</p>
    </div>
  );
}

export default function ServicesCards() {
  const [services, setServices] = useState(initialServices);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = services.findIndex((s) => s.id === active.id);
      const newIndex = services.findIndex((s) => s.id === over?.id);
      setServices((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <section className='py-20 px-6 bg-transparent text-white text-center'>
      <h2 className='text-4xl font-extrabold text-blue-600 mb-12'>
        Our Services
      </h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={services.map((s) => s.id)}
          strategy={rectSortingStrategy}
        >
          <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
            {services.map((service) => (
              <SortableCard key={service.id} service={service} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  );
}
