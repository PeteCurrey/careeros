-- Migration: Roles and Permissions (RBAC)
-- Career OS Platform Foundation
-- ============================================================

create table public.roles (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  workspace_type workspace_type not null,
  description text,
  is_system_role boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.permissions (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  resource_type text,
  action text not null,
  created_at timestamptz not null default now()
);

create table public.role_permissions (
  role_id uuid not null references public.roles(id) on delete cascade,
  permission_id uuid not null references public.permissions(id) on delete cascade,
  granted_at timestamptz not null default now(),
  primary key (role_id, permission_id)
);

-- Add FK from workspace_memberships to roles
alter table public.workspace_memberships
  add constraint fk_workspace_memberships_role_id
  foreign key (role_id) references public.roles(id);

-- Seed system roles
insert into public.roles (name, workspace_type, description, is_system_role) values
  ('individual_member', 'INDIVIDUAL', 'Standard individual Career OS user', true),
  ('school_admin', 'SCHOOL', 'School workspace administrator', true),
  ('school_counsellor', 'SCHOOL', 'Career counsellor with student access', true),
  ('school_educator', 'SCHOOL', 'Educator with limited student visibility', true),
  ('employer_admin', 'EMPLOYER', 'Employer workspace administrator', true),
  ('employer_recruiter', 'EMPLOYER', 'Recruiter with talent discovery access', true),
  ('partner_admin', 'PARTNER', 'Partner workspace administrator', true),
  ('platform_admin', 'ADMIN', 'Platform administrator', true);

-- Seed core permissions
insert into public.permissions (name, description, resource_type, action) values
  ('workspace.view', 'View workspace', 'workspace', 'view'),
  ('workspace.invite', 'Invite members to workspace', 'workspace', 'invite'),
  ('workspace.manage', 'Manage workspace settings', 'workspace', 'manage'),
  ('career_twin.read', 'Read own Career Twin', 'career_twin', 'read'),
  ('career_twin.write', 'Write to own Career Twin', 'career_twin', 'write'),
  ('career_passport.read', 'Read own Career Passport', 'career_passport', 'read'),
  ('career_passport.write', 'Write to own Career Passport', 'career_passport', 'write'),
  ('school.students.read', 'Read enrolled student summaries', 'school', 'students.read'),
  ('school.outcomes.read', 'Read school career outcomes data', 'school', 'outcomes.read'),
  ('school.settings.write', 'Manage school workspace settings', 'school', 'settings.write'),
  ('employer.search', 'Access talent discovery features', 'employer', 'search'),
  ('employer.agent.use', 'Use Employer Agent capabilities', 'employer', 'agent.use'),
  ('employer.settings.write', 'Manage employer workspace settings', 'employer', 'settings.write'),
  ('admin.all', 'Full platform administration', null, '*');
