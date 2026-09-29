# Classify Code Review checks as read analysis

## Why

ATC, AUnit, and code coverage are fundamental Code Review operations.
Requiring a separate `safe_execute` approval removes them from ordinary
non-mutating assistant catalogues and prevents an assistant from completing a
transport review.

## What changes

- Keep `atc_run` and `run_unit_tests` (with or without coverage) classified
  as `safe_execute` operations — the earlier read reclassification was
  reverted during PR #173 review after CodeAnt flagged SAP analysis
  execution under ordinary read credentials.
- Retain support for stricter object-bound `safe_execute` credentials when a
  workflow elects to use them.
- Keep repository mutations and analysis execution outside ordinary read
  authority.

## Impact

Delegated read assistants cannot run ATC, AUnit, or coverage; those
operations require an explicit scoped `safe_execute` credential bound to
exact object keys. Destination binding, authentication, response bounds, and
stricter execution policies remain server-enforced.
