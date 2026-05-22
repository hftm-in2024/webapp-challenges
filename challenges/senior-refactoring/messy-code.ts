// =============================================================================
// Support Ticket System — Type Definitions & Utility Functions
// =============================================================================

// --- Priority configuration ---

const PRIORITY_LABELS = {
  low: "Low Priority",
  medium: "Medium Priority",
  high: "High Priority",
  critical: "Critical Priority",
} as const;

// TODO: Refactor — this type duplicates information that already exists above
type Priority = "low" | "medium" | "high" | "critical";

// --- Main entity ---

interface SupportTicket {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: "open" | "in-progress" | "resolved" | "closed";
  assignee: string;
  createdAt: Date;
  updatedAt: Date;
}

// TODO: Refactor — does this interface look familiar?
type TicketPreview = Pick<SupportTicket, "title" | "priority" | "status">;

// TODO: Refactor — look at how many properties are copied from SupportTicket
interface CreateTicketData {
  title: string;
  description: string;
  priority: Priority;
  status: "open" | "in-progress" | "resolved" | "closed";
  assignee: string;
}

// TODO: Refactor — this interface looks suspiciously similar to the one above
interface UpdateTicketData {
  title?: string;
  description?: string;
  priority?: Priority;
  status?: "open" | "in-progress" | "resolved" | "closed";
  assignee?: string;
}

// --- Utility functions ---

function getPriorityLabel(priority: Priority): string {
  return PRIORITY_LABELS[priority];
}

function createTicket(data: CreateTicketData): SupportTicket {
  return {
    id: crypto.randomUUID(),
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

function updateTicket(
  ticket: SupportTicket,
  updates: UpdateTicketData
): SupportTicket {
  return {
    ...ticket,
    ...updates,
    updatedAt: new Date(),
  };
}

function toPreview(ticket: SupportTicket): TicketPreview {
  return {
    title: ticket.title,
    priority: ticket.priority,
    status: ticket.status,
  };
}

// TODO: Refactor — is there a more concise way to type this object?
function countByStatus(tickets: SupportTicket[]): {
  open: number;
  "in-progress": number;
  resolved: number;
  closed: number;
} {
  const counts: {
    open: number;
    "in-progress": number;
    resolved: number;
    closed: number;
  } = {
    open: 0,
    "in-progress": 0,
    resolved: 0,
    closed: 0,
  };

  for (const ticket of tickets) {
    counts[ticket.status]++;
  }

  return counts;
}

// --- Demo usage ---

const ticket = createTicket({
  title: "Login button not working",
  description:
    "Users report that the login button does not respond on mobile.",
  priority: "high",
  status: "open",
  assignee: "alice",
});

console.log("Created:", ticket.title);
console.log("Priority:", getPriorityLabel(ticket.priority));

const updated = updateTicket(ticket, {
  status: "in-progress",
  assignee: "bob",
});
console.log("Updated assignee:", updated.assignee);

const preview = toPreview(updated);
console.log("Preview:", preview);

const allTickets = [ticket, updated];
const stats = countByStatus(allTickets);
console.log("Stats:", stats);
