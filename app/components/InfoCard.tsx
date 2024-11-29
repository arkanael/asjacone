import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  customClasses?: string;
}

export default function InfoCard({ title, description, customClasses }: InfoCardProps)
{
  return (
    <div className={`info-card ${customClasses}`}>
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
    </div>
  );
}

