import { describe, it, expect } from 'vitest';
import { calculateStrategicScore, evaluateLaunchGate } from '@/lib/admin/partnerships';
import { PartnerStrategicScoreFactors, PartnerCompliance } from '@/types/admin/partnerships';

describe('CareerOS Partnership Target & Relationship Management System', () => {
  describe('Strategic Scoring Engine (8 Weighted Dimensions)', () => {
    it('calculates accurate weighted strategic score from factors', () => {
      const factors: PartnerStrategicScoreFactors = {
        userValue: 100,              // 100 * 0.20 = 20
        distributionPotential: 100,  // 100 * 0.20 = 20
        strategicCredibility: 100,   // 100 * 0.15 = 15
        productCapability: 100,      // 100 * 0.15 = 15
        commercialPotential: 100,    // 100 * 0.10 = 10
        dataIntelligenceValue: 100,  // 100 * 0.10 = 10
        integrationFeasibility: 100, // 100 * 0.05 = 5
        relationshipAttainability: 100, // 100 * 0.05 = 5
      };

      const score = calculateStrategicScore(factors);
      expect(score).toBe(100);
    });

    it('calculates weighted score accurately for realistic mid-tier values', () => {
      const factors: PartnerStrategicScoreFactors = {
        userValue: 80,              // 16
        distributionPotential: 70,  // 14
        strategicCredibility: 90,   // 13.5
        productCapability: 60,      // 9
        commercialPotential: 50,    // 5
        dataIntelligenceValue: 80,  // 8
        integrationFeasibility: 70, // 3.5
        relationshipAttainability: 60, // 3
      };
      // Total = 16 + 14 + 13.5 + 9 + 5 + 8 + 3.5 + 3 = 72
      const score = calculateStrategicScore(factors);
      expect(score).toBe(72);
    });

    it('clamps scores between 0 and 100', () => {
      const zeroFactors: PartnerStrategicScoreFactors = {
        userValue: 0,
        distributionPotential: 0,
        strategicCredibility: 0,
        productCapability: 0,
        commercialPotential: 0,
        dataIntelligenceValue: 0,
        integrationFeasibility: 0,
        relationshipAttainability: 0,
      };
      expect(calculateStrategicScore(zeroFactors)).toBe(0);
    });
  });

  describe('Partnership Compliance Launch Gate', () => {
    it('blocks live launch when mandatory legal/compliance criteria are pending', () => {
      const mockCompliance: PartnerCompliance = {
        id: 'comp_1',
        partner_id: 'part_1',
        nda_status: 'passed',
        contract_status: 'pending', // Blocked
        dpa_status: 'pending',     // Blocked
        security_review_status: 'passed',
        privacy_review_status: 'passed',
        minors_review_status: 'pending', // Blocked
        ai_governance_status: 'not_required',
        data_flows_documented: false,    // Blocked
        trademark_permission_status: 'passed',
        logo_permission_status: 'passed',
        public_reference_permission: 'pending',
        technical_qa_status: 'passed',
        support_escalation_agreed: true,
        updated_at: new Date().toISOString(),
      };

      const result = evaluateLaunchGate(mockCompliance);
      expect(result.canLaunch).toBe(false);
      expect(result.blockers.length).toBeGreaterThan(0);
      expect(result.blockers).toContain('Commercial agreement / MOU not executed');
      expect(result.blockers).toContain('Data Processing Agreement (DPA) pending');
      expect(result.blockers).toContain('Youth / Minor safeguarding review pending');
      expect(result.blockers).toContain('Data flow mapping not documented');
    });

    it('approves live launch when all mandatory criteria pass', () => {
      const mockCompliance: PartnerCompliance = {
        id: 'comp_2',
        partner_id: 'part_2',
        nda_status: 'passed',
        contract_status: 'passed',
        dpa_status: 'passed',
        security_review_status: 'passed',
        privacy_review_status: 'passed',
        minors_review_status: 'passed',
        ai_governance_status: 'passed',
        data_flows_documented: true,
        trademark_permission_status: 'passed',
        logo_permission_status: 'passed',
        public_reference_permission: 'passed',
        technical_qa_status: 'passed',
        support_escalation_agreed: true,
        updated_at: new Date().toISOString(),
      };

      const result = evaluateLaunchGate(mockCompliance);
      expect(result.canLaunch).toBe(true);
      expect(result.blockers.length).toBe(0);
    });

    it('permits launch when an authorized executive override is provided', () => {
      const mockCompliance: PartnerCompliance = {
        id: 'comp_3',
        partner_id: 'part_3',
        nda_status: 'pending',
        contract_status: 'pending',
        dpa_status: 'pending',
        security_review_status: 'pending',
        privacy_review_status: 'pending',
        minors_review_status: 'pending',
        ai_governance_status: 'pending',
        data_flows_documented: false,
        trademark_permission_status: 'pending',
        logo_permission_status: 'pending',
        public_reference_permission: 'pending',
        technical_qa_status: 'pending',
        support_escalation_agreed: false,
        override_reason: 'Executive pilot sandbox agreement executed under CEO authority',
        override_by: 'user_ceo_uuid',
        updated_at: new Date().toISOString(),
      };

      const result = evaluateLaunchGate(mockCompliance);
      expect(result.canLaunch).toBe(true);
      expect(result.blockers.length).toBe(0);
    });
  });
});
