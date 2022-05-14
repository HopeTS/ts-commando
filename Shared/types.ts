/** User account data */
export interface User {
  /** User's first name */
  first_name: string;

  /** User's last name */
  last_name?: string;

  /** User's username */
  username: string;

  /** User's password */
  password: string;
}
