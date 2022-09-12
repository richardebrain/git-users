export interface Data{

    user:{
      login: string;
      id?: number;
      node_id?: string;
      avatar_url: string;
      gravatar_id: string | null;
      url: string;
      html_url?: string;
      followers_url?: string;
      following_url?: string;
      gists_url?: string;
      ldap_dn?: string | undefined;
      name?: string | null;
      repos_url?: string;
      location?: string | null;
      twitter_username?: string | null;
      bio?: string | null;
      followers?: number;
      following?: number;
      public_repos?: number;
      created_at?: string | number | Date;
      blog?: string | null;
      company?: string | null;
   
    }
  }