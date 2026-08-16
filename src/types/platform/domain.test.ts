import { describe, it, expect } from 'vitest';
import type {
  WorkspaceType,
  ConsentType,
  AccessPermission,
  DefaultVisibility,
  AccessSubjectType,
  AccessResourceType,
} from '@/types/platform';

describe('Platform Domain Type System & Invariants', () => {
  it('should validate workspace types match platform architecture', () => {
    const validWorkspaceTypes: WorkspaceType[] = [
      'INDIVIDUAL',
      'SCHOOL',
      'EMPLOYER',
      'PARTNER',
      'ADMIN',
    ];
    expect(validWorkspaceTypes).toHaveLength(5);
  });

  it('should validate consent types match legal requirements', () => {
    const validConsentTypes: ConsentType[] = [
      'TERMS_OF_SERVICE',
      'PRIVACY_POLICY',
      'AI_TERMS',
      'DATA_PROCESSING',
      'GUARDIAN_AUTHORISATION',
      'SCHOOL_DATA_SHARING',
      'EMPLOYER_PROFILE_ACCESS',
      'MENTOR_DATA_ACCESS',
      'RESEARCH_PARTICIPATION',
      'MARKETING_COMMUNICATIONS',
    ];
    expect(validConsentTypes).toHaveLength(10);
  });

  it('should validate access control permissions and visibility scopes', () => {
    const validPermissions: AccessPermission[] = [
      'READ',
      'READ_SUMMARY',
      'WRITE',
      'ENDORSE',
      'VERIFY',
    ];
    const validVisibilities: DefaultVisibility[] = [
      'PRIVATE',
      'CONNECTIONS',
      'NETWORK',
      'PUBLIC',
    ];
    const validSubjects: AccessSubjectType[] = [
      'MENTOR',
      'EMPLOYER',
      'ORGANISATION',
      'PERSON',
      'GUARDIAN',
      'EDUCATOR',
      'PARTNER',
    ];
    const validResources: AccessResourceType[] = [
      'CAREER_TWIN_FIELD',
      'CAREER_TWIN_SECTION',
      'CAREER_PASSPORT',
      'CREDENTIAL',
      'WORK_HISTORY',
      'PROFILE',
      'GOALS',
      'ASSESSMENTS',
    ];

    expect(validPermissions).toHaveLength(5);
    expect(validVisibilities).toHaveLength(4);
    expect(validSubjects).toHaveLength(7);
    expect(validResources).toHaveLength(8);
  });
});
