function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
      {children}
    </p>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-[#efe5d2] mt-8 first:mt-0 mb-3">
      {children}
    </h3>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-semibold text-[#c59d5f] mt-5 mb-2">
      {children}
    </h4>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-white/60 text-xs font-light leading-relaxed mb-3">{children}</p>
}

function LabeledList({ items }: { items: { label: string; text: string }[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map(({ label, text }) => (
        <li key={label} className="flex gap-2.5 text-xs text-white/60 font-light leading-relaxed">
          <span className="text-[#c59d5f] mt-1.5 w-1 h-1 rounded-full bg-[#c59d5f] shrink-0" />
          <span>
            <span className="text-[#efe5d2] font-medium">{label}: </span>
            {text}
          </span>
        </li>
      ))}
    </ul>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-xl bg-[#c59d5f]/8 border border-[#c59d5f]/15 my-4">
      <p className="text-white/70 text-xs font-light leading-relaxed">{children}</p>
    </div>
  )
}

function InfoTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-white/10">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/5">
            {headers.map((h) => (
              <th
                key={h}
                className="px-3 py-2 text-[10px] font-bold text-[#c59d5f] uppercase tracking-wider whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/10">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-xs text-white/60 font-light align-top">
                  {cell || <span className="text-white/25">—</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface CategoryEntry {
  title: string
  definition: string
  eligibility: string
  evidence: string
}

function CategoryCard({ index, entry }: { index: number; entry: CategoryEntry }) {
  return (
    <div className="mb-5 pb-5 border-b border-white/10 last:border-0 last:mb-0 last:pb-0">
      <p className="text-sm font-semibold text-[#efe5d2] mb-2">
        {index}. {entry.title}
      </p>
      <LabeledList
        items={[
          { label: "Definition", text: entry.definition },
          { label: "Eligibility", text: entry.eligibility },
          { label: "Evidence", text: entry.evidence },
        ]}
      />
    </div>
  )
}

export function FrameworkContent() {
  return (
    <>
      <Eyebrow>NCS Enugu Innovation &amp; Impact Awards 2026</Eyebrow>

      <SectionHeading>1. Purpose &amp; Guiding Principles</SectionHeading>
      <Paragraph>
        The NCS Enugu Innovation &amp; Impact Awards 2026 exists to identify, celebrate, and
        amplify the individuals and institutions driving Enugu State&apos;s technology ecosystem
        forward across leadership, innovation, entrepreneurship, education, research, and digital
        transformation.
      </Paragraph>
      <Paragraph>The framework is built on five principles:</Paragraph>
      <LabeledList
        items={[
          { label: "Credibility", text: "Our nominations must be based on evidence and not popularity." },
          { label: "Transparency", text: "The criteria, process, and timelines must be published publicly before nominations open." },
          { label: "Fairness", text: "Every nominee must be assessed against the same rubric within their category." },
          { label: "Impact over prestige", text: "We must focus on measurable outcomes over titles or visibility." },
          { label: "Inclusiveness", text: "The framework must be designed to actively invite nominations from underrepresented groups and lesser-known but high-impact contributors." },
        ]}
      />

      <SectionHeading>2. Governance Structure (Proposed)</SectionHeading>
      <InfoTable
        headers={["Body", "Role"]}
        rows={[
          ["Awards Steering Committee (ASC)", "Owns the overall process, approves final category list, resolves disputes, ratifies final winners"],
          ["Nomination Review Panel (NRP)", "Screens nominations for eligibility and completeness"],
          ["Category Judging Panels (CJPs)", "Score eligible nominees against category rubrics; 3–5 independent judges per category, with relevant domain expertise"],
          ["Verification Desk", "Fact-checks claims, impact figures, and credentials submitted in nomination forms"],
        ]}
      />
      <Callout>
        <span className="text-[#c59d5f] font-medium">Conflict of interest rule: </span>
        Any panel or committee member with a personal, financial, or organizational relationship
        to a nominee must recuse themselves from scoring that nominee and must declare the
        conflict in writing to the ASC.
      </Callout>

      <SectionHeading>3. Nomination Categories &amp; Criteria</SectionHeading>
      <Paragraph>
        See the &quot;Categories &amp; Criteria&quot; panel for the full list of award categories,
        definitions, eligibility, and evidence requirements.
      </Paragraph>

      <SectionHeading>4. Nomination Process</SectionHeading>
      <SubHeading>Step 1 — Launch Framework Online</SubHeading>
      <Paragraph>
        Publish this nomination framework publicly across NCS Enugu channels, partner hubs, and
        social media, so categories, criteria, and process are visible and transparent before any
        submissions come in.
      </Paragraph>

      <SubHeading>Step 2 — Share Nomination Form</SubHeading>
      <Paragraph>
        Distribute the nomination form for open, public submission (self-nomination allowed for
        all categories except Lifetime Achievement and Unsung Hero) and, in parallel, conduct
        direct reachouts to potential individuals and organizations identified by the ASC, NRP,
        and partner hubs as strong candidates, so the process doesn&apos;t rely on self-nomination
        or visibility alone to surface the ecosystem&apos;s best contributors.
      </Paragraph>
      <p className="text-xs text-white/50 font-light mb-2">Required fields:</p>
      <ul className="list-disc list-inside space-y-1.5 mb-4 marker:text-[#c59d5f] text-xs text-white/60 font-light leading-relaxed pl-2">
        <li>Nominee name, organization, contact details</li>
        <li>Category selected (max. 2 categories per nominee, to prevent dilution)</li>
        <li>150–300 word impact statement</li>
        <li>Supporting evidence (links, documents, metrics, media)</li>
        <li>Nominator name and relationship to nominee</li>
        <li>Two reference contacts</li>
      </ul>

      <SubHeading>Step 3 — Eligibility Screening</SubHeading>
      <Paragraph>
        NRP checks each submission against category eligibility criteria within 5 business days of
        submission. Incomplete entries get a 72-hour window to add missing information before
        disqualification.
      </Paragraph>

      <SubHeading>Step 4 — Verification</SubHeading>
      <Paragraph>
        Verification Desk fact-checks quantitative claims (user numbers, revenue, funding, awards
        cited) and confirms nominee/organization legitimacy.
      </Paragraph>

      <SubHeading>Step 5 — Judging</SubHeading>
      <Paragraph>
        CJPs independently score eligible nominees using the category rubric. Scores are averaged
        across judges; outlier scores (&gt;2 standard deviations from panel mean) are flagged for
        panel discussion rather than automatically dropped. In case of a tie, the tiebreaker would
        be the organization or individual with more quantifiable social impact.
      </Paragraph>

      <SubHeading>Step 6 — Shortlisting</SubHeading>
      <Paragraph>
        Top 3–5 scorers per category are announced publicly as finalists ahead of the awards event.
      </Paragraph>

      <SubHeading>Step 7 — Final Selection &amp; Ratification</SubHeading>
      <Paragraph>
        CJP recommendations go to the ASC for final ratification. ASC may request clarification but
        does not override panel scoring without documented cause.
      </Paragraph>

      <SubHeading>Step 8 — Awards Ceremony</SubHeading>
      <Paragraph>
        Winners announced and recognized at the NCS Enugu Innovation &amp; Impact Awards 2026
        ceremony.
      </Paragraph>

      <SectionHeading>5. Scoring Rubric Template (Flagship Categories)</SectionHeading>
      <InfoTable
        headers={["Criterion", "Weight", "Score (1–10)", "Weighted Score"]}
        rows={[
          ["Innovation / Originality", "varies by category", "", ""],
          ["Measurable Impact", "varies by category", "", ""],
          ["Leadership / Execution", "varies by category", "", ""],
          ["Sustainability / Scalability", "varies by category", "", ""],
          ["Ecosystem or Community Contribution", "varies by category", "", ""],
          ["Total", "100%", "", ""],
        ]}
      />
      <Paragraph>
        Judges score independently; final category score = mean of all judge totals after removing
        declared conflicts.
      </Paragraph>

      <SectionHeading>6. Eligibility Safeguards</SectionHeading>
      <LabeledList
        items={[
          { label: "Geographic anchor", text: "Nominee or nominating organization must have a demonstrable, current tie to Enugu State's tech ecosystem (residence, operations, origin, or sustained contribution)." },
          { label: "Time window", text: "Unless otherwise stated, evidence must relate to activity within the last 24 months (exceptions: Lifetime Achievement, which requires a 10-year record)." },
          { label: "No self-nomination", text: "Lifetime Achievement and Unsung Hero Recognition." },
          { label: "Category limit", text: "Maximum 2 category submissions per nominee to keep judging load and comparisons fair." },
          { label: "Plagiarism/fraud clause", text: "Any nominee found to have submitted false or materially misleading evidence is disqualified and may be barred from future editions." },
        ]}
      />

      <SectionHeading>7. Suggested Timeline (Adjust to Actual Event Date)</SectionHeading>
      <InfoTable
        headers={["Milestone", "Duration"]}
        rows={[
          ["Call for nominations opens", ""],
          ["Nomination window closes", ""],
          ["Eligibility screening", ""],
          ["Verification", ""],
          ["Judging", ""],
          ["Finalists announced", ""],
          ["ASC ratification", ""],
          ["Awards ceremony", ""],
        ]}
      />

      <p className="text-white/30 text-xs font-light italic leading-relaxed mt-6">
        This is a working framework. Categories, weightings, and timelines can be adjusted by the
        Awards Steering Committee before the official call for nominations is published.
      </p>
    </>
  )
}

const individualCategories: CategoryEntry[] = [
  {
    title: "Tech Leader of the Year",
    definition: "Exceptional leadership in technology and innovation, demonstrated through vision, execution, and influence on the ecosystem.",
    eligibility: "Individual in a leadership role (founder, executive, hub lead, senior technologist) active in Enugu's tech ecosystem in the last 24 months.",
    evidence: "Leadership track record, team/organization growth metrics, strategic initiatives led, third-party references (min. 2).",
  },
  {
    title: "Innovation & Impact Award",
    definition: "Organizations or individuals creating measurable innovation and impact.",
    eligibility: "This is open to individuals or organizations; They must demonstrate a specific innovation (product, service, model, or process) with quantifiable outcomes.",
    evidence: "The description of innovation, baseline vs. current impact data, user/beneficiary numbers, independent validation where possible.",
  },
  {
    title: "Student Technology Excellence Award",
    definition: "Recognizes promising young innovators still in formal education.",
    eligibility: "For currently enrolled students (secondary or tertiary institution) in Enugu State, or Enugu-origin students enrolled elsewhere.",
    evidence: "The project description, proof of enrollment, mentor/lecturer endorsement, evidence of originality (code repo, prototype, competition record).",
  },
  {
    title: "Startup Excellence Award",
    definition: "Recognizes a startup demonstrating strong growth, innovation, and market traction.",
    eligibility: "A registered and operating startup, HQ or primary operations in Enugu State, founded within the last 5 years.",
    evidence: "Company registration, traction metrics (revenue, users, funding), product overview, founder bios.",
  },
  {
    title: "Women in Technology Impact Award",
    definition: "Recognizes a woman making significant contributions to technology in Enugu either as a builder, leader, educator, or advocate.",
    eligibility: "A woman who is active in Enugu's tech ecosystem.",
    evidence: "Contribution summary, impact evidence, references, evidence of mentorship/advocacy where applicable.",
  },
  {
    title: "Digital Transformation Excellence Award",
    definition: "Recognizes an organization that has successfully driven digital transformation internally or for its sector.",
    eligibility: "An organization (private or nonprofit) that has executed a digital transformation initiative with documented before/after outcomes.",
    evidence: "Case study, metrics (efficiency, cost, revenue, reach), stakeholder testimony.",
  },
  {
    title: "Public Sector Tech Impact Award",
    definition: "Recognizes a government agency, public institution, or public-private initiative improving service delivery through technology.",
    eligibility: "A public sector body or public-facing initiative operating in Enugu State.",
    evidence: "Description of initiative, citizen/user impact data, efficiency or transparency gains, official endorsement.",
  },
  {
    title: "Lifetime Achievement Award",
    definition: "Honors an individual with a sustained, multi-year record of contribution to Enugu's technology ecosystem.",
    eligibility: "Minimum 7 years of relevant contribution; nomination by third party only (no self-nomination).",
    evidence: "Career/contribution timeline, testimonials (min. 3), evidence of long-term ecosystem influence.",
  },
  {
    title: "Emerging Tech Talent Award",
    definition: "Recognizes an early-career individual (outside formal education, distinct from the Student award) showing exceptional promise and rapid growth in technology skill, output, or influence.",
    eligibility: "Individual with ≤3 years of professional/practical experience in tech (paid, freelance, or self-taught/open-source track record counts); not currently enrolled as a student.",
    evidence: "Portfolio or project history, growth trajectory (skills, roles, or output over time), employer/mentor/community endorsement, evidence of self-driven learning or contribution (e.g., open-source commits, freelance work, competition placements).",
  },
  {
    title: "Ecosystem Impact Award",
    definition: "Recognizes an individual or organization whose work has measurably strengthened the broader Enugu tech ecosystem itself, not just their own product or company, but the environment others build in (talent pipeline, funding access, collaboration infrastructure, policy, community cohesion). Distinct from the Innovation & Impact Award (which rewards a specific innovation) and the Ecosystem Builder Recognition (a lighter committee-level nod), this is a flagship-tier award for sustained, ecosystem-wide impact.",
    eligibility: "Individual or organization active in Enugu's tech ecosystem for at least 18 months, with initiatives or work that benefit multiple organizations, founders, or individuals beyond their own.",
    evidence: "Description of ecosystem-level initiative(s) (e.g., funding facilitated, partnerships brokered, talent placed, events/programs run, policy influenced), number and breadth of beneficiaries, third-party testimony from at least two unrelated organizations/individuals who benefited.",
  },
]

export function CriteriaContent() {
  return (
    <>
      <SectionHeading>Individual &amp; Leadership Categories</SectionHeading>
      {individualCategories.map((entry, i) => (
        <CategoryCard key={entry.title} index={i + 1} entry={entry} />
      ))}

      <SectionHeading>Committee Recognition Categories</SectionHeading>
      <Paragraph>
        These are lighter-weight, panel-nominated recognitions (self-nomination optional) intended
        to cast a wider net beyond flagship-award competitors. Committee Recognition categories
        carry physical awards/certificates and pla&hellip;
      </Paragraph>
      <InfoTable
        headers={["Category", "Focus"]}
        rows={[
          ["Technology Hub Recognition", "Hubs/incubators that are driving community, training, or startup support"],
          ["Artificial Intelligence Innovation Recognition", "Notable AI/ML product, research, or application work"],
          ["Cybersecurity Innovation Recognition", "Security tooling, awareness programs, or research"],
          ["Blockchain Innovation Recognition", "Blockchain/Web3 products, protocols, or education"],
          ["FinTech Innovation Recognition", "Financial technology products or services with real adoption"],
          ["EdTech Innovation Recognition", "Technology improving access to or quality of education"],
          ["Robotics & Emerging Technology Recognition", "Hardware, IoT, robotics, or other frontier tech"],
          ["Research Excellence Recognition", "Published or applied research advancing the tech field"],
          ["Ecosystem Builder Recognition", "Individuals/organizations building community infrastructure (events, networks, policy advocacy)"],
          ["Unsung Hero Recognition", "High-impact contributors with low public visibility to be nominated by peers, not self-nominated"],
        ]}
      />
      <Paragraph>
        Committee Recognition nominees are evaluated on a simplified 3-criterion rubric: relevance
        to category (40%), evidence of contribution (40%), community/peer support for the
        nomination (20%).
      </Paragraph>
    </>
  )
}
