create table contacts
(
    id            bigint auto_increment
        primary key,
    discord       varchar(255) null,
    email_address varchar(255) null,
    facebook      varchar(255) null,
    phone_number  bigint       null,
    job           varchar(255) null,
    name          varchar(255) null
);

create table games
(
    id   bigint auto_increment
        primary key,
    name varchar(255) null
);

create table leagues
(
    id              bigint auto_increment
        primary key,
    date_created    date         null,
    duration        int          not null,
    end_date        date         null,
    format          varchar(255) null,
    last_updated    date         null,
    logo_file_path  varchar(255) null,
    match_frequency varchar(255) null,
    max_teams       int          not null,
    name            varchar(255) null,
    password        varchar(255) null,
    platform        varchar(255) null,
    reward          varchar(255) null,
    rules           mediumtext   null,
    season          int          not null,
    stage           varchar(255) null,
    start_date      date         null,
    game_id         bigint       null,
    tournament_id   bigint       null,
    constraint UK_ip3mfd1fg0kl2jqep6fvp76ly
        unique (name),
    constraint FKe0x4tho1o0fycagab9blc2rig
        foreign key (game_id) references games (id)
);

create table leagues_contacts
(
    league_id  bigint not null,
    contact_id bigint not null,
    constraint FKi0osgx0ngyw4lut2x9b50vayk
        foreign key (contact_id) references contacts (id),
    constraint FKno84s96ay7tpo534m1waas5ji
        foreign key (league_id) references leagues (id)
);

create table roles
(
    id   int auto_increment
        primary key,
    name varchar(20) null
);

create table teams
(
    id             bigint auto_increment
        primary key,
    date_created   date         null,
    logo_file_path varchar(255) null,
    name           varchar(255) null,
    password       varchar(255) null,
    team_info      varchar(255) null,
    last_updated   date         null
);

create table teams_leagues
(
    team_id       bigint       not null,
    league_id     bigint       not null,
    id            bigint       not null,
    original_name varchar(255) null,
    placement     int          not null,
    win_loss      varchar(255) null,
    constraint FKfucxjkr7xb2ceuitn9fntutci
        foreign key (league_id) references leagues (id),
    constraint FKngtnfj47xx3m8pma7xj4y99qc
        foreign key (team_id) references teams (id)
);

create table tournaments
(
    id             bigint auto_increment
        primary key,
    bracket        varchar(255) null,
    date_created   date         null,
    end_date       date         null,
    format         varchar(255) null,
    last_updated   date         null,
    logo_file_path varchar(255) null,
    name           varchar(255) null,
    password       varchar(255) null,
    reward         varchar(255) null,
    start_date     date         null,
    game_id        bigint       null,
    league_id      bigint       null,
    constraint UK_toqueen5yq82q1kyuo8x9u7rh
        unique (name),
    constraint FKk8huhgsk5r59hdsg8y9ek3df8
        foreign key (game_id) references games (id),
    constraint FKqmntnj2or3nfgt9q60tkwx8yq
        foreign key (league_id) references leagues (id)
);

alter table leagues
    add constraint FKm498kausibu2kgphg4daqy5mj
        foreign key (tournament_id) references tournaments (id);

create table matches
(
    id              bigint auto_increment
        primary key,
    duration        varchar(255) null,
    game_match_id   bigint       not null,
    match_date_time datetime(6)  null,
    score           varchar(255) null,
    victor          char         null,
    game_id         bigint       null,
    league_id       bigint       null,
    team_a_id       bigint       null,
    team_b_id       bigint       null,
    tournament_id   bigint       null,
    map             varchar(255) null,
    constraint FK23dnop04r2pfj2wvo21vakpph
        foreign key (league_id) references leagues (id),
    constraint FKeeniokyjgo5k6rmhjujatn27i
        foreign key (tournament_id) references tournaments (id),
    constraint FKmrgum5di41ywbw87fdecijmvs
        foreign key (team_a_id) references teams (id),
    constraint FKntr6m7io9k4xcxgn7prtyojko
        foreign key (team_b_id) references teams (id),
    constraint FKoq8ddvttyuandns5h0h0oq20t
        foreign key (game_id) references games (id)
);

create table teams_matches
(
    team_id  bigint not null,
    match_id bigint not null,
    constraint FK8eqnhrirr8wft3nfpqxbremtk
        foreign key (match_id) references matches (id),
    constraint FKkhauh5xa7f81o6spggdu6e41r
        foreign key (team_id) references teams (id)
);

create table teams_tournaments
(
    team_id       bigint not null,
    tournament_id bigint not null,
    constraint FK24s810yw359703h577ys1iiw4
        foreign key (tournament_id) references tournaments (id),
    constraint FKn2bkst9dp1wdy7heg8nt2ao10
        foreign key (team_id) references teams (id)
);

create table users
(
    id                    bigint auto_increment
        primary key,
    birth_date            date         null,
    date_joined           date         null,
    email                 varchar(255) null,
    first_name            varchar(255) null,
    last_name             varchar(255) null,
    last_updated          date         null,
    password              varchar(255) null,
    profile_pic_file_path varchar(255) null,
    username              varchar(255) null,
    roles                 tinyblob     null,
    constraint UKr43af9ap4edm43mmtq01oddj6
        unique (username)
);

create table matches_players
(
    id       bigint auto_increment
        primary key,
    team     char   not null,
    match_id bigint null,
    user_id  bigint null,
    constraint FK48p68lls9tbbtgbs970s1paqh
        foreign key (user_id) references users (id),
    constraint FKk0ikmaed5w7b5vmdbw42nuy3l
        foreign key (match_id) references matches (id)
);

create table user_roles
(
    user_id bigint not null,
    role_id int    not null,
    primary key (user_id, role_id),
    constraint FKh8ciramu9cc9q3qcqiv4ue8a6
        foreign key (role_id) references roles (id),
    constraint FKhfh9dx7w3ubf1co1vdev94g3f
        foreign key (user_id) references users (id)
);

create table users_games
(
    user_id bigint not null,
    game_id bigint not null,
    constraint FKj02ehjgkwhp5dqqe8iskk6f8t
        foreign key (game_id) references games (id),
    constraint FKk70xanxxbjs1yuum23xcmvohi
        foreign key (user_id) references users (id)
);

create table users_leagues
(
    user_id   bigint       not null,
    league_id bigint       not null,
    id        bigint       not null,
    placement int          not null,
    team      varchar(255) null,
    win_loss  varchar(255) null,
    constraint FK5q79fp6tjbc6a9307xiipcfmt
        foreign key (user_id) references users (id),
    constraint FKno0mrvrh90a0lao3tib4p5ema
        foreign key (league_id) references leagues (id)
);

create table users_teams
(
    id          bigint auto_increment
        primary key,
    date_joined date   null,
    date_left   date   null,
    user_id     bigint null,
    team_id     bigint null,
    constraint FK31k9hhkcp7fiugrk2lu7vq9jo
        foreign key (user_id) references users (id),
    constraint FKh5yx5pc8x6mv9ohqfh18tw6es
        foreign key (team_id) references teams (id)
);

create table users_tournaments
(
    user_id       bigint not null,
    tournament_id bigint not null,
    constraint FK18wahv5hl1lqvg4ce8yvqr0la
        foreign key (user_id) references users (id),
    constraint FKf6yobsbgvn0353wn3mamdguge
        foreign key (tournament_id) references tournaments (id)
);


