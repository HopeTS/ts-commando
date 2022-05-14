/** Backend User account data */
export type User = {
  /** User's first name */
  first_name: string;

  /** User's last name */
  last_name?: string;

  /** User's display / login name */
  username: string;

  /** User's password */
  password: string;
};
