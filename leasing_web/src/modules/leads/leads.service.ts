import type { CreateLeadDTO } from "./leads.dto.js";

// In-memory or Database storage
const leadsStore: (CreateLeadDTO & { id: string; createdAt: string })[] = [];

export const leadsService = {
  async createLead(dto: CreateLeadDTO) {
    const lead = {
      id: `lead_${Date.now()}`,
      ...dto,
      createdAt: new Date().toISOString(),
    };
    leadsStore.push(lead);
    console.log("[New Lead Received]:", lead);
    return lead;
  },

  async getAllLeads() {
    return leadsStore;
  },
};
