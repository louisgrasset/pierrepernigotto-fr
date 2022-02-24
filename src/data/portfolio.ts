import { Project } from "../types";

export const endOfStudyProjects: Project[] = [
    {
        id: "project1",
        label: "Bientôt disponible...",
        institution: "Fives Cryo",
        details: [
            {
                header:"",
                items:["Le projet qui m'a été confié dans le cadre de mon master 2 est encore confidentiel."],
            }
        ],
        class: "Master 2",
    },
    {
        id: "project2",
        label: "Kubernetes",
        institution: "Fives Cryo",
        details: [
            {
                header:"",
                items:["Implémentation de Kubernetes au sein d'une infrastructure On-Premise."],
            }
        ],
        class: "Bac + 3",
    },
    {
        id: "project3",
        label: "Migration du parc de clients W7 vers Windows 10",
        institution: "Fives Cryo",
        details: [
            {
                header:"",
                items:["Suite à la fin de support de Windows 7, nous avons du faire face et déployer massivement Windows 10 sur les 300 postes clients de l'entreprise. En tant que Technicien Informatique, ce projet m'a été confié."],
            }
        ],
        class: "Bac + 2",
    },
];

export const bacPlus5Projects: Project[] = [
    {
        id: "project1",
        label: "24h dans la peau d'un RSSI",
        institution: "Openclassroom",
        details: [
            {
                header:"",
                items:["Identifier vos compétences existantes et vos motivations pour ce métier.","Construire pas à pas son projet professionnel"],
            }
        ],
        class: "Master 2",
    },
    {
        id: "project2",
        label: "Sécurisez l'infrastructure SI",
        institution: "Openclassroom",
        details: [
            {
                header:"",
                items:["Configurer un serveur Linux sécurisé","Configurer des VLAN avec un switch","Sécuriser Windows avec Active Directory","Configurer un pare-feu","Sécuriser un serveur web Apache","Installer une infrastructure virtuelle"],
            }
        ],
        class: "Master 2",
    },
    {
        id: "project3",
        label: "Sécurisez une application du SI",
        institution: "Openclassroom",
        details: [
            {
                header:"",
                items:["Définir les exigences de sécurité","Détecter les vulnérabilités dans le code","Rédiger des tests de sécurité"],
            }
        ],
        class: "Master 2",
    },
    {
        id: "project4",
        label: "Auditez la sécurité SI de l'entreprise",
        institution: "Openclassroom",
        details: [
            {
                header:"",
                items: ["Conduire des tests d'intrusion","Rédiger un plan d'audit"],
            }
        ],
        class: "Master 2",
    },
    {
        id: "project5",
        label: "Mettez en place la surveillance de la sécurité SI",
        institution: "Openclassroom",
        details: [
            {
                header:"",
                items: ["Configurer la journalisation des éléments du SI","Concevoir une architecture de surveillance de la sécurité SI","Proposer des scénarios de corrélation"],
            }
        ],
        class: "Master 2",
    },
    {
        id: "project6",
        label: "Investiguez un incident de sécurité",
        institution: "Openclassroom",
        details: [
            {
                header:"",
                items:["Réaliser une analyse forensics","Rédiger un rapport d'incident de sécurité"],
            }
        ],
        class: "Master 2",
    },
    {
        id: "project7",
        label: "Gérez le risque SI d'une organisation",
        institution: "Openclassroom",
        details: [
            {
                header:"",
                items:["Analyser les risques SI","Rédiger une Politique de Sécurité SI"],
            }
        ],
        class: "Master 2",
    },
    {
        id: "project8",
        label: "Réalisez une veille sur les menaces et les solutions",
        institution: "Openclassroom",
        details: [
            {
                header:"",
                items:["Effectuer une veille technologique, réglementaire, économique sur la sécurité des SI"],
            }
        ],
        class: "Master 2",
    }
];

export const bacPlus3Projects: Project[] = [
    {
        id: "project1",
        label: "WOOD - partie Systèmes",
        institution: "CESI Alternance",
        details: [
            {
                header: "La conception de l'infrastructure système",
                items: ["La justification de l'emplacement et de la répartition des rôles systèmes", "Un schéma système de la solution", "L'emplacement des salles serveurs", "La définition argumentée et justifiée des choix techniques (normes utilisées, matériels choisis)", "Le budget prévisionnel"],
            }
        ],
        class: "Bac + 3",
    },
    {
        id: "project2",
        label: "WOOD - partie Réseaux",
        institution: "CESI Alternance",
        details: [
            {
                header: "La conception de l'infrastructure réseau",
                items: ["Un schéma logique et un schéma physique de la topologie", "L'emplacement des baies de brassage, et des locaux techniques", "La justification du choix des éléments actifs", "Le plan d'adressage IP", "Le budget prévisionnel"],
            },
            {
                header:"La conception de l'infrastructure WAN",
                items: [ "Un schéma logique et physique de la solution", "Un diagramme de flux intersites", "La définition argumentée et justifiée des choix techniques (normes utilisées, matériels choisis)", "Le budget prévisionnel"]
            }
        ],
        class: "Bac + 2",
    },
    {
        id: "project3",
        label: "WOOD - partie Sécurité",
        institution: "CESI Alternance",
        details: [
            {
                header: "La conception de l'infrastructure réseau",
                items: ["Analyse des risques de l'infrastructure réseau et moyen mis en œuvre pour les éviter", "Un diagramme de flux sécurisés locaux", "La justification des technologies de sécurité du réseau", "Le budget prévisionnel"],
            },
            {
                header:"La conception de l'infrastructure WAN",
                items: ["Analyse des risques de l'infrastructure système etmoyen mis en œuvre pour les éviter", "Un diagramme de flux sécurisés intersites et internet", "La justification des technologies de sécurité du WAN", "Le budget prévisionnel"]
            },
            {
                header:"La conception de la sécurité",
                items:["Exemple de PSSI", "Justification de la conformité PCI DSS", "Charte utilisateur", "Justification du respect du RGPD"]
            }
        ],
        class: "Bac + 3",
    },
];

export const bacPlus2Projects: Project[] = [
    {
        id: "project1",
        label: "SAS",
        institution: "CESI Alternance",
        details: [
            {
                header:"",
                items: ["Acquérir le comportement approprié en entreprise", "Identifier les mesures réglementaires régissant la mise en oeuvre de l'informatique dans l'entreprise", "Etre capable d'apporter des solutions rapides à des problèmatiques perturbant le bon fonctionnement de l'entreprise dans sa production de biens ou services.", "Etre capable de concevoir un dossier de synthèse, de communiquer et défendre les choix effectués."],
            }
        ],
        class: "Bac + 2",
    },
    {
        id: "project2",
        label: "START",
        institution: "CESI Alternance",
        details: [
            {
                header:"",
                items:["Maitriser l'Installation, la configuration, l'administration et l'optimisation et la maintenance d'un système d'exploitation dans un environnement propriétaire « Windows »","Maitriser l'Installation, la configuration, l'administration et l'optimisation et la maintenance d'un système d'exploitation environnement libre « linux »", "Maitriser l'utilisation d'un logiciel de masterisation et de déploiement.", "Maitriser le fonctionnement des réseaux locaux (câblage, lan, tcp/ip, protocole, plan adressage)", "Etre capable d'installer et configurer des applications (bureautique, antivirus, application métier ...)", "Etre capable de maintenir et dépanner les systèmes sur le poste de travail"],
            }
        ],
        class: "Bac + 2",
    },
    {
        id: "project3",
        label: "Evolution",
        institution: "CESI Alternance",
        details: [
            {
                header:"",
                items: ["Mettre en oeuvre les outils d'Administration de Windows Server", "Mettre en oeuvre les outils d'Administration de Linux", "Etre capable de sécuriser l'accès aux réseaux et aux données de l'entreprise", "Rédiger des rapports écrits adaptés au contexte professionnel", "Etre capable de créer et gérer une base de données relationnelle", "Etre capable d'automatiser les tâches à l'aide d'un outil de programmation (Powershell)"],
            }
        ],
        class: "Bac + 2",
    },
    {
        id: "project4",
        label: "Maturité",
        institution: "CESI Alternance",
        details: [
            {
                header:"",
                items: ["Réaliser un Business Plan", "Réaliser Etude de marché", "Identifier le modèle juridique adéquat", "Identifier les besoins en fond de roulement", "Identifier les concurrents directs et indirects", "Mettre en oeuvre une communication externe"],
            }
        ],
        class: "Bac + 2",
    },
    {
        id: "project5",
        label: "Projet SAQ",
        institution: "CESI Alternance",
        details: [
            {
                header:"",
                items: ["Mettre en place une solution sécurisée d'interconnexion des sites", "Mettre à niveau l'architecture réseau de chaque site", "Mettre à niveau l'architecture système (service d'annuaire, stockage, ...)", "Mettre en œuvre une solution de PCA/PRA", "Apporter une qualité de service s'appuyant sur ITIL", "Mettre en œuvre des mesures de sécurité en vous basant sur une étude des risques", "Cette proposition devra présenter le résultat de vos recherches, les justificatifs de vos choix, les besoins en termes de savoir-faire et une étude des coûts prévisionnels"],
            }
        ],
        class: "Bac + 2",
    }];
