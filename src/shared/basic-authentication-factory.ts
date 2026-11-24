// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Global factory for HTTP Basic Authorization header values.
 */
export const BasicAuthenticationFactory = {
  /**
   * Returns "Basic " followed by base64("user:<pat>").
   */
  create(pat: string): string {
    return `Basic ${Buffer.from(`user:${pat}`).toString("base64")}`;
  },
};
