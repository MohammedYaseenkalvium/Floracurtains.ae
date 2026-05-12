import { useState } from "react";

const burgundy = "#5A0E12";
const burgundyLight = "rgba(90,14,18,0.08)";
const burgundyMid = "rgba(90,14,18,0.15)";

const palette = {
  bg: "#F8F5F2",
  surface: "#EFE7DF",
  border: "#D8C9BC",
  muted: "#6B625A",
  text: "#1A1A1A",
};

const leads = [
  { id: 1, client: "Layla Al Mansouri", service: "Living Room Drapes", staff: "Fatima K.", priority: "High", status: "Consultation", lastContact: "Today", phone: "+971 50 123 4567" },
  { id: 2, client: "James Thornton", service: "Bedroom Blackout", staff: "Omar S.", priority: "Medium", status: "Quotation Sent", lastContact: "Yesterday", phone: "+971 55 987 6543" },
  { id: 3, client: "Priya Mehta", service: "Office Blinds", staff: "Fatima K.", priority: "Low", status: "Material Approval", lastContact: "3 days ago", phone: "+971 52 456 7890" },
  { id: 4, client: "Ahmed Al Rashid", service: "Villa Full Package", staff: "Nadia R.", priority: "High", status: "Measurement Visit", lastContact: "Today", phone: "+971 50 321 6547" },
  { id: 5, client: "Sophie Blanc", service: "Sheer Curtains", staff: "Omar S.", priority: "Medium", status: "New Lead", lastContact: "2 days ago", phone: "+971 54 789 0123" },
];

const pipeline = {
  "New Lead": [
    { id: 1, client: "Sophie Blanc", service: "Sheer Curtains", value: "AED 4,200" },
    { id: 2, client: "Tariq Hamdan", service: "Roman Blinds", value: "AED 6,800" },
  ],
  "Consultation": [
    { id: 3, client: "Layla Al Mansouri", service: "Living Room Drapes", value: "AED 18,500" },
  ],
  "Quotation Sent": [
    { id: 4, client: "James Thornton", service: "Bedroom Blackout", value: "AED 9,200" },
    { id: 5, client: "Mona Al Farsi", service: "Study Motorised", value: "AED 12,000" },
  ],
  "Material Approval": [
    { id: 6, client: "Priya Mehta", service: "Office Blinds", value: "AED 7,400" },
  ],
  "Tailoring": [
    { id: 7, client: "Khalid Nasser", service: "Majlis Drapes", value: "AED 22,000" },
  ],
};

const appointments = [
  { time: "09:00", client: "Ahmed Al Rashid", type: "Measurement", location: "Palm Jumeirah Villa" },
  { time: "11:30", client: "Layla Al Mansouri", type: "Consultation", location: "Business Bay Showroom" },
  { time: "14:00", client: "Sophie Blanc", type: "Site Visit", location: "Downtown Dubai" },
  { time: "16:30", client: "James Thornton", type: "Installation", location: "JBR Apt 24B" },
];

const recentActivity = [
  { client: "Ahmed Al Rashid", action: "Measurement visit confirmed", time: "10 min ago", icon: "📐" },
  { client: "Priya Mehta", action: "Material samples approved via WhatsApp", time: "1 hour ago", icon: "✅" },
  { client: "Khalid Nasser", action: "Invoice #1042 sent — AED 22,000", time: "2 hours ago", icon: "📄" },
  { client: "Sophie Blanc", action: "New lead from Instagram referral", time: "3 hours ago", icon: "✨" },
  { client: "James Thornton", action: "Installation rescheduled to today 4:30 PM", time: "Yesterday", icon: "🗓" },
];

const navItems = [
  { label: "Dashboard", icon: "◈", active: true },
  { label: "Projects", icon: "◻", active: false },
  { label: "CRM / Leads", icon: "◉", active: false },
  { label: "Inventory", icon: "▦", active: false },
  { label: "Installations", icon: "◫", active: false },
  { label: "Analytics", icon: "◎", active: false },
];

const priorityStyle = {
  High: { bg: "rgba(190,24,24,0.08)", color: "#991B1B" },
  Medium: { bg: "rgba(202,138,4,0.08)", color: "#854D0E" },
  Low: { bg: "rgba(21,128,61,0.08)", color: "#166534" },
};

const statusColors = {
  "New Lead": "#8B8178",
  "Consultation": "#5A0E12",
  "Measurement Visit": "#854D0E",
  "Quotation Sent": "#185FA5",
  "Material Approval": "#0F6E56",
  "Tailoring": "#7F77DD",
  "Installation": "#993C1D",
  "Completed": "#166534",
};

function Chip({ label, style }) {
  return (
    <span style={{
      padding: "2px 10px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 500,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0.02em",
      ...style,
    }}>{label}</span>
  );
}

function KPICard({ label, value, sub, accent }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.72)",
      backdropFilter: "blur(20px)",
      border: `1px solid rgba(0,0,0,0.06)`,
      borderRadius: 12,
      padding: "20px 24px",
      flex: 1,
      minWidth: 0,
    }}>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: palette.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 34, fontWeight: 800, color: accent || palette.text, lineHeight: 1, letterSpacing:"-0.04em"}}>{value}</div>
      {sub && <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: palette.muted, marginTop: 6 }}>{sub}</div>}
    </div>
  );
}

function KanbanCard({ card }) {
  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${palette.border}`,
      borderRadius: 8,
      padding: "10px 12px",
      marginBottom: 8,
    }}>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: palette.text }}>{card.client}</div>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: palette.muted, marginTop: 2 }}>{card.service}</div>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: burgundy, marginTop: 8, fontWeight: 600 }}>{card.value}</div>
    </div>
  );
}

export default function FloraCRM() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <div style={{ display: "flex", height: "100vh", background: palette.bg, fontFamily: "Inter, sans-serif", overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{
        width: 256,
        minWidth: 256,
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(20px)",
        borderRight: "1px solid rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        padding: "0",
        zIndex: 10,
      }}>
        {/* Logo */}
        <div style={{ padding: "28px 24px 20px" }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 22, fontWeight: 600, color: burgundy, letterSpacing: "0.04em" }}>FLORA</div>
          <div style={{ fontSize: 10, color: palette.muted, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>Interior Operations</div>
        </div>

        {/* Search */}
        <div style={{ padding: "0 16px 16px" }}>
          <div style={{ background: palette.surface, border: `1px solid ${palette.border}`, borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: palette.muted, fontSize: 14 }}>⌕</span>
            <input placeholder="Search clients, projects…" style={{ border: "none", background: "transparent", outline: "none", fontSize: 12, color: palette.text, width: "100%", fontFamily: "Inter, sans-serif" }} />
          </div>
        </div>

        {/* Nav */}
        <div style={{ padding: "0 12px", flex: 1 }}>
          <div style={{ fontSize: 10, color: palette.muted, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 12px 8px" }}>Main</div>
          {navItems.map(item => (
            <div key={item.label} onClick={() => setActiveNav(item.label)} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "9px 12px", borderRadius: 6, marginBottom: 2,
              cursor: "pointer",
              background: activeNav === item.label ? burgundyLight : "transparent",
              borderLeft: activeNav === item.label ? `3px solid ${burgundy}` : "3px solid transparent",
              color: activeNav === item.label ? burgundy : palette.muted,
              fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: activeNav === item.label ? 500 : 400,
              transition: "all 0.15s",
            }}>
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              {item.label}
            </div>
          ))}

          <div style={{ borderTop: `1px solid ${palette.border}`, margin: "12px 0" }} />
          <div style={{ fontSize: 10, color: palette.muted, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 12px 8px" }}>Quick Actions</div>
          {[
            { label: "Create Quote", icon: "📋" },
            { label: "Schedule Visit", icon: "📅" },
            { label: "WhatsApp Client", icon: "💬" },
          ].map(a => (
            <div key={a.label} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 12px", borderRadius: 6, marginBottom: 2,
              cursor: "pointer", color: palette.muted, fontSize: 13,
              borderLeft: "3px solid transparent",
            }}>
              <span style={{ fontSize: 14 }}>{a.icon}</span>
              {a.label}
            </div>
          ))}

          <div style={{ borderTop: `1px solid ${palette.border}`, margin: "12px 0" }} />
        </div>

        {/* Bottom */}
        <div style={{ padding: "0 12px 20px" }}>
          {[{ label: "Settings", icon: "⚙" }, { label: "Logout", icon: "→" }].map(a => (
            <div key={a.label} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 12px", borderRadius: 6, marginBottom: 2,
              cursor: "pointer", color: palette.muted, fontSize: 13,
              borderLeft: "3px solid transparent",
            }}>
              <span>{a.icon}</span>
              {a.label}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, overflow: "auto", padding: "32px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 30, fontWeight: 800,letterSpacing: "-0.04em", color: palette.text }}>Dashboard</div>
            <div style={{ fontSize: 12, color: palette.muted, marginTop: 2 }}>Monday, 12 May 2025 · Dubai, UAE</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button style={{ background: palette.surface, border: `1px solid ${palette.border}`, borderRadius: 8, padding: "8px 16px", fontSize: 12, color: palette.text, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
              + New Lead
            </button>
            <button style={{ background: burgundy, border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, color: "#fff", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
              + Create Quote
            </button>
          </div>
        </div>

        {/* KPI Row */}
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <KPICard label="Active Leads" value="24" sub="↑ 3 this week" accent={burgundy} />
          <KPICard label="Ongoing Projects" value="11" sub="2 due this week" />
          <KPICard label="Monthly Revenue" value="AED 187K" sub="↑ 12% vs last month" accent="#0F6E56" />
          <KPICard label="Pending Installs" value="5" sub="Next: Tomorrow 9AM" accent="#854D0E" />
        </div>

        {/* Row 2: Kanban + Appointments */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, marginBottom: 24 }}>
          {/* Kanban Pipeline */}
          <div style={{ background: "#fff", border: `1px solid ${palette.border}`, borderRadius: 12, padding: 20, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: palette.text }}>Project Pipeline</div>
              <span style={{ fontSize: 11, color: palette.muted }}>CRM Workflow</span>
            </div>
            <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8 }}>
              {Object.entries(pipeline).map(([stage, cards]) => (
                <div key={stage} style={{ minWidth: 155, flex: "0 0 155px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: statusColors[stage] || palette.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{stage}</div>
                    <span style={{ fontSize: 10, background: palette.surface, borderRadius: 10, padding: "1px 7px", color: palette.muted }}>{cards.length}</span>
                  </div>
                  {cards.map(c => <KanbanCard key={c.id} card={c} />)}
                  <div style={{ border: `1px dashed ${palette.border}`, borderRadius: 8, padding: "8px", textAlign: "center", cursor: "pointer" }}>
                    <span style={{ fontSize: 11, color: palette.muted }}>+ Add</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Appointments */}
          <div style={{ background: "rgba(255,255,255,0.72)", backdropFilter: "blur(20px)", border: `1px solid rgba(0,0,0,0.06)`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: palette.text, marginBottom: 16 }}>Today's Schedule</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {appointments.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ minWidth: 40, textAlign: "right" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: burgundy }}>{a.time}</span>
                  </div>
                  <div style={{ flex: 1, background: palette.surface, borderRadius: 8, padding: "8px 12px", borderLeft: `3px solid ${burgundy}` }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: palette.text }}>{a.client}</div>
                    <div style={{ fontSize: 11, color: palette.muted }}>{a.type} · {a.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: CRM Table + Activity */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 16 }}>
          {/* CRM Table */}
          <div style={{ background: "#fff", border: `1px solid ${palette.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: `1px solid ${palette.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: palette.text }}>Lead Management</div>
              <div style={{ display: "flex", gap: 8 }}>
                <select style={{ background: palette.surface, border: `1px solid ${palette.border}`, borderRadius: 6, padding: "5px 10px", fontSize: 11, color: palette.muted, fontFamily: "Inter, sans-serif" }}>
                  <option>All Status</option>
                  <option>New Lead</option>
                  <option>Consultation</option>
                </select>
              </div>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: palette.bg }}>
                  {["Client", "Service", "Staff", "Priority", "Status", "Last Contact", "Actions"].map(h => (
                    <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 10, fontWeight: 500, color: palette.muted, textTransform: "uppercase", letterSpacing: "0.1em", borderBottom: `1px solid ${palette.border}` }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((l, i) => (
                  <tr key={l.id} style={{ borderBottom: `1px solid ${palette.surface}`, transition: "background 0.1s" }}>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: palette.text }}>{l.client}</div>
                      <div style={{ fontSize: 11, color: palette.muted }}>{l.phone}</div>
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: palette.muted }}>{l.service}</td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: palette.text }}>{l.staff}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <Chip label={l.priority} style={priorityStyle[l.priority]} />
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <Chip label={l.status} style={{ background: "rgba(90,14,18,0.06)", color: burgundy }} />
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: palette.muted }}>{l.lastContact}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button title="WhatsApp" style={{ background: "rgba(21,128,61,0.08)", border: "none", borderRadius: 6, padding: "5px 8px", cursor: "pointer", fontSize: 13 }}>💬</button>
                        <button title="Call" style={{ background: palette.surface, border: "none", borderRadius: 6, padding: "5px 8px", cursor: "pointer", fontSize: 13 }}>📞</button>
                        <button title="Quote" style={{ background: burgundyLight, border: "none", borderRadius: 6, padding: "5px 8px", cursor: "pointer", fontSize: 13 }}>📋</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Activity */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#fff", border: `1px solid ${palette.border}`, borderRadius: 12, padding: 20, flex: 1 }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: palette.text, marginBottom: 14 }}>Recent Activity</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {recentActivity.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 16 }}>{a.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 500, color: palette.text }}>{a.client}</div>
                      <div style={{ fontSize: 11, color: palette.muted, marginTop: 1 }}>{a.action}</div>
                      <div style={{ fontSize: 10, color: palette.border, marginTop: 2 }}>{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Showcase */}
            <div style={{ background: "rgba(255,255,255,0.72)", backdropFilter: "blur(20px)", border: `1px solid rgba(0,0,0,0.06)`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: palette.text, marginBottom: 12 }}>Material Showcase</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  { name: "Ivory Linen", swatch: "#EDE0CF" },
                  { name: "Charcoal Velvet", swatch: "#3A3A3A" },
                  { name: "Dusty Rose Silk", swatch: "#C8A4A5" },
                  { name: "Sage Sheer", swatch: "#B2BFA8" },
                ].map(m => (
                  <div key={m.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 6, background: m.swatch, border: `1px solid ${palette.border}` }} />
                    <div style={{ fontSize: 11, color: palette.text }}>{m.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}