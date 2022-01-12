export interface Graduate {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    imageUrl: string;
    certificate: string;
}

export interface Learner {
    learner_reg_no: number;
    learner_first_name: string;
    learner_second_name: string;
    learner_last_name: string;
    course_taken: string;
    date_enrolled:  number;
    date_completed:  number;
    grade_attained: string;
    certificate_image: URL;
    institution: number;
}

export interface Institution {
    user: string;
    institution_reg_no: number;
    institution_name: string;
    location_name: string;
    location_address: number;
    institution_email: string;
}