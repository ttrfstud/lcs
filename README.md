longest continuous segment algorithm
====================================
an attempt to code lcs as described [here](http://predictioncenter.org/casp/casp7/public/doc/LCS_GDT.README). the signature of the only exported method is _(protein1, protein2, cut, rmsdc)_, where:

  * proteinN, N in [1,2], is an array of protein residues, where each residue has the following format:

  ```
  {
  name: 'name of residue',
  atoms: [[x1, y1, z1], ...]
  }
  ```

  * cut is angstrom rmsd cut for lcs run

  * rmsdc is a procedure that calculates rmsd of two lists of atoms. for example, kabsch algorithm could be used

return value has the following format:

```javascript
{
  subs: [ { tgt: [], exp: [] }],
  stats: []
}
```

where subs is an array of all matched segments in the second protein (model, tgt) and the first protein (exp). tgt and exp arrays in each record are zero-based references to residues in second and first proteins, respectively. stats is an array indexed by zero-based residue indices of first protein, where the value at *i* is the length of the longest segment in second protein where i-th residue of the first protein, while being matched - probably along with other residues, had the longest match.

