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

- **Enterprise RAG Pattern**: Diagram showing SharePoint -> Unstructured -> Vector DB -> LLM App.
- **Compliance Archive Pattern**: Diagram showing File Server -> PII Detection -> Redacted Archive.

## 4. Feedback & Iteration

- **"Was this helpful?" Feedback**: Enable page-level feedback widgets (Mintlify supports this) to identify weak spots.
- **Search Analytics**: Monitor search queries to see what terms users are looking for but not finding.

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
