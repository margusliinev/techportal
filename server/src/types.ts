enum Employment {
    full_time = 'full-time',
    part_time = 'part-time',
    internship = 'internship',
    contractor = 'contract',
}

enum Location {
    remote = 'remote',
    part_remote = 'part-remote',
    tallinn = 'tallinn',
    tartu = 'tartu',
    parnu = 'parnu',
    narva = 'narva',
}

export interface Job {
    id: number;
    company: string;
    position: string;
    employment: Employment;
    location: Location;
    salary: number;
    expire_date: Date;
    technologies: string[];
    company_logo: string;
    company_post: string;
}
