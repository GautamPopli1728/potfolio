export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCardProps {
  skill: Skill;
  index: number;
} 