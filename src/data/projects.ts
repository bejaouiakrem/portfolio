import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'task-manager',
    title: 'Task Manager - CI/CD & GitOps on Azure',
    description: 'Full-stack Task Management application deployed to Azure Kubernetes Service (AKS) with automated CI/CD pipeline using Jenkins, Docker, and Argo CD GitOps.',
    technologies: ['Angular', 'Spring Boot', 'Kubernetes', 'AKS', 'Jenkins', 'Docker', 'Argo CD', 'MySQL'],
    contribution: 'Designed and implemented the complete CI/CD pipeline, containerized the application, and configured GitOps deployment with Argo CD.',
    challenge: 'Setting up multi-environment deployment with Jenkins, managing Kubernetes secrets, and configuring Argo CD for automatic sync.',
    architecture: {
      description: 'A modern cloud-native application with CI/CD pipeline, container orchestration, and GitOps for deployment.',
      flow: [
        'Developer pushes code to GitHub',
        'Jenkins triggers build and runs tests',
        'Docker builds container images',
        'Images pushed to Container Registry',
        'Argo CD detects manifest changes',
        'Argo CD syncs to AKS cluster',
        'Application is deployed and running'
      ]
    },
    repository: 'https://github.com/bejaouiakrem/task-manager-manifests',
    featured: true,
    liveUrl: '#'
  },
  {
    id: 'openstack-kubernetes-lab',
    title: 'OpenStack + Kubernetes Private Cloud',
    description: 'Built a private cloud environment using OpenStack with networking and compute resources, then deployed a Kubernetes cluster on top.',
    technologies: ['OpenStack', 'Kubernetes', 'Docker', 'Linux', 'Networking'],
    contribution: 'Designed and deployed the entire OpenStack environment, configured networking, and installed Kubernetes cluster.',
    challenge: 'Configuring OpenStack networking for Kubernetes, managing storage persistence, and securing the Kubernetes API.',
    architecture: {
      description: 'OpenStack provides the infrastructure layer while Kubernetes runs on top for container orchestration.',
      flow: [
        'OpenStack provisions compute resources',
        'Networking configured with Neutron',
        'Kubernetes control plane deployed',
        'Worker nodes join the cluster',
        'Applications deployed to Kubernetes'
      ]
    },
    repository: 'https://github.com/bejaouiakrem/openstack-kubernetes-lab',
    featured: true
  },
  {
    id: 'k8s-portfolio',
    title: 'Kubernetes-Themed Portfolio',
    description: 'Interactive portfolio with kubectl-style command interface built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
    contribution: 'Built the entire application from scratch including command parser, terminal UI, and data architecture.',
    challenge: 'Implementing a terminal interface in React with autocomplete, command history, and proper error handling.',
    architecture: {
      description: 'React application with a terminal interface that simulates kubectl commands.',
      flow: [
        'User enters command',
        'Command parser processes input',
        'Data layer returns results',
        'Terminal renders output'
      ]
    },
    repository: 'https://github.com/bejaouiakrem/akrem-k8s-portfolio',
    featured: true
  }
];