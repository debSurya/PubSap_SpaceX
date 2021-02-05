export interface SpaceXDetails {
    links: { mission_patch: string };
    mission_id: string[];
    launch_year: string;
    launch_success: boolean;
    launch_landing: boolean;
    mission_name: string;
    flight_number: number;
}