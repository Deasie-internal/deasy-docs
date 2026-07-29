# Strategic Documentation Roadmap

This roadmap outlines the path to building "best-in-class" developer documentation for Unstructured by Collibra. Our goal is to move beyond static reference material to an interactive, task-oriented learning experience that matches industry leaders like Unstructured.io, LlamaIndex, and Haystack.

## 1. Core Experience Improvements (Immediate Wins)

We have already begun unifying the experience by linking Concepts to API References. The next steps focus on usability and learnability.

### 🎯 Objective: "Zero to Hello World in 5 minutes"

- [x] **Interactive Quickstart**: Replace the text-heavy quickstart with a copy-pasteable Python script that runs out of the box (using a public sandbox key if possible).
- [x] **SDK-First Examples**: Every concept page (Data Connectors, Metadata, etc.) currently links to raw API endpoints. We should prioritize showing the *Python SDK usage* first, as most developers will use the library, not raw cURL requests.

## 2. "Cookbooks" & Recipes (High Impact)

Best-in-class docs don't just explain *what* things are; they show *how* to solve specific problems.

### 🍳 Proposed Recipe Section
Create a new top-level "Cookbooks" or "Guides" section with end-to-end code samples for common patterns:

1.  [x] **"S3 to SharePoint Pipeline"**: A complete script showing how to ingest PDFs from an S3 bucket, extract metadata, and export to SharePoint.
2.  [x] **"S3 to Qdrant Pipeline"**: A complete script for building a RAG pipeline with vector search.
3.  [x] **"PII Detection"**: A guide focusing specifically on how to configure and test sensitive data detection.
4.  [x] **"Custom Taxonomy Setup"**: A walkthrough of using AI to generate complex taxonomies.

**Why this moves the needle**: Developers often ignore concepts and look for code that closely matches their use case. Recipes capture this intent.

## 3. Architecture Blueprints

Visual learners need to see the "system view". We should add a "Reference Architectures" section.

- [x] **Enterprise RAG Pattern**: Diagram showing SharePoint -> Unstructured -> Vector DB -> LLM App. (`concepts/architecture.mdx`)
- [x] **Compliance Archive Pattern**: Diagram showing File Server -> PII Detection -> Redacted Archive. (`concepts/architecture.mdx`)
- [x] **Document Enrichment Pattern**: S3 -> Classification -> SharePoint metadata columns. (`concepts/architecture.mdx`)

## 4. Feedback & Iteration

- [x] **"Was this helpful?" Feedback**: Enabled via `feedback.thumbsRating` in `docs.json`.
- [ ] **Search Analytics**: Monitor search queries to see what terms users are looking for but not finding.

## 5. SDK Accuracy & Theming (July 2026)

- [x] **SDK v0.21.0 alignment**: All code samples now use the real Stainless-generated surface (`metadata.generate.generate_batch`, `data_slice.*`, `task_status.get_status`, `tags.upsert(tag_data=...)`, typed `connector_body` with `type` discriminators, required `base_url`).
- [x] **DesignOS theming**: Docs colors/fonts now mirror the frontend `darrren-work` DesignOS theme (terracotta `#B7500C` primary, sage secondary, warm cream/charcoal surfaces, Inter + Roboto Mono).
- [x] **Projects SDK coverage**: `concepts/projects.mdx` now documents `client.projects.*`.
- [x] **Landing page**: Replaced Mintlify starter `introduction.mdx` with a real product introduction; removed orphaned starter template pages under `essentials/`.
- [x] **Workflows coverage**: New `concepts/workflows.mdx` documents `client.workflows.*` (cron-scheduled ingest → classify pipelines, matching the web UI's predefined workflows).
- [x] **Data Quality cookbook**: New `cookbooks/data-quality.mdx` (completeness scan → DQ slice → remediation → standardization → scorecard), ported from the SDK's own example notebooks 04 & 06.
- [x] **Standardization SDK examples**: `concepts/metadata.mdx` now shows `standardization_suggest` / `standardization_bulk`.
- [ ] **Post-redesign screenshots**: Refresh UI screenshots after the agent-centric shell ships (planned Aug 30, 2026).
- [ ] **Versioning docs**: `client.versioning.*` (run / retrieve_versions) is exposed by the SDK but the underlying semantics need PM input before documenting.
- [ ] **AI-Readiness score docs**: Document the 0-100 quality score and rule-based "AI-ready" tags once the SDK exposes the full flow.

## Benchmark Comparison

| Feature | Current Docs | Competitors (LlamaIndex, Unstructured.io) | Goal |
| :-- | :-- | :-- | :-- |
| **Structure** | Concepts + API Ref | Concepts + SDK Ref + Cookbooks | Add Cookbooks & SDK Ref |
| **Code Samples** | Minimal (JSON) | Extensive (Python/JS/Notebooks) | Add full Python scripts |
| **Visuals** | Basic Mermaids | Rich Diagrams + Screenshots | Add detailed architecture diagrams |
| **Onboarding** | Text explanations | "One-line" installation & run | Simplify Quickstart to 1 script |

## Next Steps

1.  **Draft the first "Cookbook"**: I recommend starting with the "S3 to Qdrant" pipeline as it covers Connector -> Processing -> Destination.
2.  **Update Concept Pages**: Add a "Python SDK" tab to the API Reference cards to show how to instantiate these objects in code.
