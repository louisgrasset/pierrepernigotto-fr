import { Study } from "../types/Study";
import { cesi, fivescryo } from "./companies";

export const studies: Study[][] = [
    [
        {
            company: fivescryo,
            label: "Technicien Informatique",
            details: [
                "Gestion de Parc",
                "Accompagnement Utilisateurs",
                "Gestion & achats des consommables IT",
                "Implémentation d'un serveur de stratégies réseaux",
                "Implémentation d'un serveur de déploiement de postes"
            ],
            tag: "Apprentissage",
            start: new Date(2018, 7),
            end: new Date(2020, 6)
        },
        {
            company: cesi,
            label: "Technicien systemes & réseaux",
            details: [
                "Administrer et maintenir un parc informatique",
                "Mettre en place et gérer un réseau d'entreprise",
                "Administrer les systèmes serveurs Linux",
                "Administrer les systèmes serveurs Windows",
                "Installer et configurer des applications client/serveur",
                "Assurer la sécurité et la haute disponibilité",
                "Développer ses pratiques professionnelles",
                "Certifier ses compétences de Technicien systèmes et réseaux"
            ],
            tag: "BAC + 2",
            start: new Date(2018, 8),
            end: new Date(2020, 6)
        },
    ],

    [
        {
            company: fivescryo,
            label: "Administrateur Systèmes & Réseaux",
            details: [
                "Supervision & accompagnement d'un apprenti Technicien IT",
                "Administration GED & GED Technique",
                "Administration Serveurs (migration, gestion hyperviseur)",
                "Administration AD et Serveur de fichiers",
                "Administration MDM",
                "Administration Systèmes",
                "Administration réseaux"
            ],
            tag: "Apprentissage",
            start: new Date(2020, 9),
            end: new Date(2021, 8)
        },
        {
            company: cesi,
            label: "BACHELOR Responsable en Ingénierie Systèmes & Réseaux",
            details: [
                "Concevoir et mettre en oeuvre les infrastructures réseaux",
                "Concevoir et mettre en oeuvre les infrastructures systèmes",
                "Maintenir et sécuriser les infrastructures informatiques",
                "Manager le service informatique et ses projets",
                "Manager autrement",
                "Certifier ses compétences de Administrateur systèmes et réseaux",
            ],
            tag: "BAC + 3",
            start: new Date(2020, 9),
            end: new Date(2021, 8)
        },
    ],
    [
        {
            company: fivescryo,
            label: "Chargé de missions IT",
            details: [
                "Sensibilisation des Utilisateurs sur la cybersécurité",
                "Administration du SI Fives Cryo (voir plus bas pour les tâches d'administration)",
                "Mise en oeuvre de la politique SI groupe au sein de la société",
            ],
            tag: "Apprentissage",
            start: new Date(2021, 9),
            end: new Date(2022, 8)
        },
        {
            company: cesi,
            label: "Master 2 - Responsable en Sécurité des Systèmes d'Information",
            details: [
                "Définir et mettre en œuvre la politique de sécurité",
                "Procéder à un audit des systèmes d'information et préconiser des évolutions",
                "Gérer les risques de l'entreprise dans le respect des réglementations (RGPD…)",
                "Conduire et accompagner des projets de sécurité des SI",
                "Mettre en place des techniques de sécurité afin de détecter des intrusions",
                "Organiser les processus de traitement et de gestion des incidents",
                "Mettre en œuvre le processus forensic",
                "Sécuriser les infrastructures réseaux et systèmes et les applications web",
                "Développer et promouvoir la politique auprès de tous les acteurs"
            ],
            tag: "BAC + 5",
            start: new Date(2021, 9),
            end: new Date(2022, 8)
        },
    ]
];
