import type { Schema, Struct } from '@strapi/strapi';

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'experience';
    icon: 'file';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummary: Schema.Attribute.Text;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    description: '';
    displayName: 'project';
    icon: 'calendar';
  };
  attributes: {
    description: Schema.Attribute.Text;
    ProjectName: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'experience.experience': ExperienceExperience;
      'project.project': ProjectProject;
      'skills.skills': SkillsSkills;
    }
  }
}
