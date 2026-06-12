// Simuliert eine "schwere" Export-Library.
// In einer echten App wäre das z.B. jsPDF, xlsx oder chart.js.
import { AppEvent } from '../data/mock-data';

export function exportToCsv(events: AppEvent[]): string {
  const headers = ['ID', 'Titel', 'Datum', 'Ort', 'Kategorie', 'Teilnehmer', 'Max', 'Preis'];
  const rows = events.map(e => [
    e.id,
    `"${e.title}"`,
    e.date,
    `"${e.location}"`,
    e.category,
    e.attendees,
    e.maxAttendees,
    e.price,
  ]);

  return [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
}

export function downloadCsv(csv: string, filename: string): void {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function generateReport(events: AppEvent[]): string {
  const totalRevenue = events.reduce((sum, e) => sum + e.price * e.attendees, 0);
  const avgAttendees = Math.round(events.reduce((sum, e) => sum + e.attendees, 0) / events.length);

  const categoryBreakdown = events.reduce(
    (acc, e) => {
      acc[e.category] = (acc[e.category] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  let report = '=== EventHub Report ===\n\n';
  report += `Total Events: ${events.length}\n`;
  report += `Total Revenue: CHF ${totalRevenue.toLocaleString()}\n`;
  report += `Average Attendees: ${avgAttendees}\n\n`;
  report += '--- By Category ---\n';
  for (const [cat, count] of Object.entries(categoryBreakdown)) {
    report += `  ${cat}: ${count} events\n`;
  }
  return report;
}

export function exportToJson(events: AppEvent[]): string {
  return JSON.stringify(events, null, 2);
}

// Simulierte Validierungs-Logik (aufwändig, selten gebraucht)
export function validateEventData(events: AppEvent[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  for (const event of events) {
    if (event.attendees > event.maxAttendees) {
      errors.push(`Event "${event.title}": Mehr Teilnehmer als erlaubt`);
    }
    if (event.price < 0) {
      errors.push(`Event "${event.title}": Negativer Preis`);
    }
    if (!event.title.trim()) {
      errors.push(`Event ID ${event.id}: Titel fehlt`);
    }
    const dateObj = new Date(event.date);
    if (isNaN(dateObj.getTime())) {
      errors.push(`Event "${event.title}": Ungültiges Datum`);
    }
  }
  return { valid: errors.length === 0, errors };
}
