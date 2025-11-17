import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ChevronRight, ChevronLeft, Download, RefreshCw, Target, Zap, Users, Brain, Database, Rocket, TrendingUp, AlertCircle, CheckCircle, Award, Box, MessageSquare, BarChart3, Lightbulb, UserCheck, Share2 } from 'lucide-react';

const ExOCanvasEvaluacion = () => {
  const [currentSection, setCurrentSection] = useState('intro');
  const [currentAttribute, setCurrentAttribute] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [sector, setSector] = useState('');
  const [responses, setResponses] = useState({});

  const exoAttributes = {
    mtp: {
      id: 'mtp',
      name: 'MTP - Propósito Masivo Transformador',
      shortName: 'MTP',
      icon: '🎯',
      color: '#8b5cf6',
      category: 'core',
      description: 'Un propósito aspiracional que inspira y atrae talento, clientes e inversores',
      questions: [
        {
          id: 'mtp1',
          text: '¿Su empresa tiene un propósito claro que va más allá de generar ganancias?',
          options: [
            { value: 1, label: 'No tenemos un propósito definido, solo operamos día a día' },
            { value: 2, label: 'Tenemos misión/visión genérica que nadie recuerda' },
            { value: 3, label: 'Tenemos un propósito definido conocido internamente' },
            { value: 4, label: 'Propósito inspirador que guía decisiones estratégicas' },
            { value: 5, label: 'MTP transformador que atrae talento y clientes apasionados' }
          ]
        },
        {
          id: 'mtp2',
          text: '¿Su propósito inspira a su equipo y stakeholders?',
          options: [
            { value: 1, label: 'No hay conexión emocional con el trabajo' },
            { value: 2, label: 'El equipo trabaja solo por salario' },
            { value: 3, label: 'Algunos se sienten conectados al propósito' },
            { value: 4, label: 'El propósito motiva y atrae buenos talentos' },
            { value: 5, label: 'El propósito genera comunidad apasionada y evangelistas' }
          ]
        },
        {
          id: 'mtp3',
          text: '¿Qué tan ambicioso es su propósito?',
          options: [
            { value: 1, label: 'Ser rentables y sobrevivir' },
            { value: 2, label: 'Ser líderes locales en nuestro rubro' },
            { value: 3, label: 'Ser referentes nacionales en calidad' },
            { value: 4, label: 'Transformar la industria a nivel regional' },
            { value: 5, label: 'Impactar globalmente: alimentar al mundo, regenerar ecosistemas' }
          ]
        },
        {
          id: 'mtp4',
          text: '¿Su propósito guía las decisiones diarias de la empresa?',
          options: [
            { value: 1, label: 'Las decisiones son solo por rentabilidad inmediata' },
            { value: 2, label: 'Ocasionalmente consideramos el impacto' },
            { value: 3, label: 'El propósito influye en decisiones importantes' },
            { value: 4, label: 'Evaluamos cada decisión contra el propósito' },
            { value: 5, label: 'El propósito es el filtro principal para toda decisión' }
          ]
        }
      ]
    },
    scale: [
      {
        id: 'staff',
        name: 'Staff on Demand',
        shortName: 'Staff',
        icon: '👥',
        color: '#10b981',
        category: 'scale',
        description: 'Acceder a talento bajo demanda sin necesidad de contratación permanente',
        questions: [
          {
            id: 's1',
            text: '¿Utiliza trabajadores temporales o por proyecto según necesidad?',
            options: [
              { value: 1, label: 'Solo empleados fijos, nunca temporales' },
              { value: 2, label: 'Ocasionalmente contratamos temporales en cosecha' },
              { value: 3, label: 'Usamos regularmente trabajadores por proyecto/temporada' },
              { value: 4, label: 'Tenemos red de especialistas on-demand (agronomos, veterinarios)' },
              { value: 5, label: 'Modelo flexible: 70%+ del talento es bajo demanda/freelance' }
            ]
          },
          {
            id: 's2',
            text: '¿Accede a expertise especializado sin contratación permanente?',
            options: [
              { value: 1, label: 'Si necesitamos expertos, debemos contratarlos fijo' },
              { value: 2, label: 'Ocasionalmente consultores puntuales' },
              { value: 3, label: 'Usamos consultores regularmente para proyectos' },
              { value: 4, label: 'Red de expertos disponibles: IA, biotech, logística' },
              { value: 5, label: 'Plataformas digitales conectan con expertos globales 24/7' }
            ]
          },
          {
            id: 's3',
            text: '¿Usa plataformas digitales para encontrar talento?',
            options: [
              { value: 1, label: 'Solo contratamos por referencias personales' },
              { value: 2, label: 'Publicamos anuncios tradicionales' },
              { value: 3, label: 'Usamos portales de empleo básicos' },
              { value: 4, label: 'Plataformas especializadas AgriTech/freelance' },
              { value: 5, label: 'APIs con Upwork, Fiverr, plataformas globales especializadas' }
            ]
          }
        ]
      },
      {
        id: 'community',
        name: 'Community & Crowd',
        shortName: 'Comunidad',
        icon: '🌐',
        color: '#3b82f6',
        category: 'scale',
        description: 'Aprovechar comunidades y multitudes para innovación, marketing y operaciones',
        questions: [
          {
            id: 'c1',
            text: '¿Tiene una comunidad activa alrededor de su marca/producto?',
            options: [
              { value: 1, label: 'No tenemos comunidad, solo clientes transaccionales' },
              { value: 2, label: 'Algunos clientes leales pero sin interacción' },
              { value: 3, label: 'Grupo de WhatsApp/Facebook con clientes activos' },
              { value: 4, label: 'Comunidad digital comprometida (redes, eventos)' },
              { value: 5, label: 'Comunidad masiva que co-crea, promociona y defiende marca' }
            ]
          },
          {
            id: 'c2',
            text: '¿Sus clientes/comunidad participan en innovación o mejoras?',
            options: [
              { value: 1, label: 'No, nosotros decidimos todo internamente' },
              { value: 2, label: 'Ocasionalmente pedimos opiniones básicas' },
              { value: 3, label: 'Hacemos encuestas de satisfacción regularmente' },
              { value: 4, label: 'Co-creamos productos con clientes seleccionados' },
              { value: 5, label: 'Crowdsourcing activo: clientes diseñan, votan, mejoran productos' }
            ]
          },
          {
            id: 'c3',
            text: '¿Usa crowdfunding o pre-ventas para validar productos?',
            options: [
              { value: 1, label: 'Nunca, invertimos primero y luego vendemos' },
              { value: 2, label: 'Alguna vez preguntamos antes de producir' },
              { value: 3, label: 'Pre-vendemos a clientes conocidos regularmente' },
              { value: 4, label: 'Plataformas de pre-venta digital antes de producir' },
              { value: 5, label: 'Modelo sistemático: crowdfunding/pre-venta para todo nuevo producto' }
            ]
          }
        ]
      },
      {
        id: 'algorithms',
        name: 'Algorithms',
        shortName: 'Algoritmos',
        icon: '🤖',
        color: '#f59e0b',
        category: 'scale',
        description: 'Usar algoritmos e IA para automatizar decisiones y procesos',
        questions: [
          {
            id: 'a1',
            text: '¿Usa algoritmos/IA para optimizar procesos productivos?',
            options: [
              { value: 1, label: 'Todo manual, ninguna automatización inteligente' },
              { value: 2, label: 'Fórmulas básicas en Excel para decisiones' },
              { value: 3, label: 'Software agrícola con recomendaciones básicas' },
              { value: 4, label: 'Algoritmos para riego, fertilización, predicción' },
              { value: 5, label: 'IA avanzada: visión artificial, ML para toda la operación' }
            ]
          },
          {
            id: 'a2',
            text: '¿Algoritmos predicen problemas o necesidades (predictivo)?',
            options: [
              { value: 1, label: 'Solo reaccionamos cuando hay problemas' },
              { value: 2, label: 'Revisiones periódicas programadas' },
              { value: 3, label: 'Algunos sensores con alertas básicas' },
              { value: 4, label: 'Modelos predictivos para plagas, enfermedades, mercado' },
              { value: 5, label: 'IA predice todo: clima, precios, rendimientos, mantenimiento' }
            ]
          },
          {
            id: 'a3',
            text: '¿Usa IA para personalización (clientes, productos)?',
            options: [
              { value: 1, label: 'Productos/servicios estándar para todos' },
              { value: 2, label: 'Segmentación básica manual' },
              { value: 3, label: 'Ofertas personalizadas para clientes grandes' },
              { value: 4, label: 'Sistema CRM con recomendaciones automáticas' },
              { value: 5, label: 'IA personaliza cada interacción, producto, precio dinámico' }
            ]
          }
        ]
      },
      {
        id: 'leveraged',
        name: 'Leveraged Assets',
        shortName: 'Activos',
        icon: '📦',
        color: '#ef4444',
        category: 'scale',
        description: 'Acceder a activos sin necesidad de poseerlos (arrendamiento, compartidos)',
        questions: [
          {
            id: 'l1',
            text: '¿Arrienda o comparte activos en lugar de comprarlos?',
            options: [
              { value: 1, label: 'Compramos todos los activos/maquinaria' },
              { value: 2, label: 'Ocasionalmente arrendamos en emergencias' },
              { value: 3, label: 'Arrendamos algunos equipos costosos regularmente' },
              { value: 4, label: 'Modelo mixto: core propio, resto arrendado/compartido' },
              { value: 5, label: 'Modelo asset-light: casi todo arrendado/compartido via plataformas' }
            ]
          },
          {
            id: 'l2',
            text: '¿Usa plataformas para acceder a recursos (tractores, drones, laboratorios)?',
            options: [
              { value: 1, label: 'No, todo debe ser propio o no lo usamos' },
              { value: 2, label: 'Conocemos vecinos que nos prestan ocasionalmente' },
              { value: 3, label: 'Cooperativas locales para compartir equipos' },
              { value: 4, label: 'Plataformas digitales de sharing (ej: Uber para tractores)' },
              { value: 5, label: 'Ecosistema completo: acceso on-demand a cualquier activo' }
            ]
          },
          {
            id: 'l3',
            text: '¿Monetiza sus activos ociosos (arrienda a otros)?',
            options: [
              { value: 1, label: 'Activos quedan ociosos cuando no los usamos' },
              { value: 2, label: 'Ocasionalmente prestamos a conocidos' },
              { value: 3, label: 'Arrendamos activos manualmente a otros productores' },
              { value: 4, label: 'Sistema formal de arriendo generando ingresos extra' },
              { value: 5, label: 'Plataforma digital: nuestros activos generan ingresos 24/7' }
            ]
          }
        ]
      },
      {
        id: 'engagement',
        name: 'Engagement',
        shortName: 'Engagement',
        icon: '🎮',
        color: '#ec4899',
        category: 'scale',
        description: 'Técnicas de engagement para mantener usuarios activos y leales',
        questions: [
          {
            id: 'e1',
            text: '¿Usa gamificación o incentivos digitales para engagement?',
            options: [
              { value: 1, label: 'No usamos ningún sistema de incentivos' },
              { value: 2, label: 'Descuentos básicos por volumen' },
              { value: 3, label: 'Programa de puntos/lealtad tradicional' },
              { value: 4, label: 'App con gamificación: badges, niveles, rewards' },
              { value: 5, label: 'Sistema sofisticado: ranking, competencias, economía digital' }
            ]
          },
          {
            id: 'e2',
            text: '¿Sus clientes interactúan frecuentemente con su marca digital?',
            options: [
              { value: 1, label: 'Solo contacto al momento de compra' },
              { value: 2, label: 'Email/WhatsApp ocasional' },
              { value: 3, label: 'Interacciones regulares en redes sociales' },
              { value: 4, label: 'App móvil donde revisan info/compran frecuentemente' },
              { value: 5, label: 'Engagement diario: notificaciones, contenido, transacciones' }
            ]
          },
          {
            id: 'e3',
            text: '¿Tiene mecanismos para feedback continuo de clientes?',
            options: [
              { value: 1, label: 'No recolectamos feedback sistemáticamente' },
              { value: 2, label: 'Encuesta anual básica' },
              { value: 3, label: 'Encuestas post-compra regulares' },
              { value: 4, label: 'Sistema digital de rating/reviews en tiempo real' },
              { value: 5, label: 'Loops de feedback continuo con IA analizando sentimiento' }
            ]
          }
        ]
      }
    ],
    ideas: [
      {
        id: 'interfaces',
        name: 'Interfaces',
        shortName: 'Interfaces',
        icon: '🖥️',
        color: '#06b6d4',
        category: 'ideas',
        description: 'Procesos y APIs que filtran y conectan con atributos externos',
        questions: [
          {
            id: 'i1',
            text: '¿Tiene procesos claros para gestionar staff on-demand, comunidad, assets?',
            options: [
              { value: 1, label: 'No hay procesos formales para estas cosas' },
              { value: 2, label: 'Procesos ad-hoc cuando surge la necesidad' },
              { value: 3, label: 'Algunos procesos documentados básicos' },
              { value: 4, label: 'Procesos claros y repetibles para gestionar externos' },
              { value: 5, label: 'Interfaces automatizadas: APIs conectan ecosistema externo' }
            ]
          },
          {
            id: 'i2',
            text: '¿Usa APIs para conectar con plataformas externas?',
            options: [
              { value: 1, label: 'No usamos APIs, todo manual/aislado' },
              { value: 2, label: 'Integraciones básicas con 1-2 sistemas' },
              { value: 3, label: 'Algunas APIs para pagos, logística' },
              { value: 4, label: 'Ecosistema de APIs: marketplaces, sensores, fintech' },
              { value: 5, label: 'Arquitectura API-first: todo conectado, plug & play' }
            ]
          },
          {
            id: 'i3',
            text: '¿Puede integrar nuevas tecnologías rápidamente?',
            options: [
              { value: 1, label: 'Implementar algo nuevo toma 6+ meses' },
              { value: 2, label: 'Procesos lentos, 3-6 meses' },
              { value: 3, label: 'Podemos integrar en 1-2 meses' },
              { value: 4, label: 'Integraciones en semanas con APIs' },
              { value: 5, label: 'Plug & play: nuevas herramientas en días' }
            ]
          }
        ]
      },
      {
        id: 'dashboards',
        name: 'Dashboards',
        shortName: 'Dashboards',
        icon: '📊',
        color: '#14b8a6',
        category: 'ideas',
        description: 'Métricas en tiempo real para todos los aspectos del negocio',
        questions: [
          {
            id: 'd1',
            text: '¿Tiene dashboards en tiempo real de toda su operación?',
            options: [
              { value: 1, label: 'No tenemos dashboards, solo reportes ocasionales' },
              { value: 2, label: 'Reportes semanales/mensuales en Excel' },
              { value: 3, label: 'Dashboards básicos actualizados diariamente' },
              { value: 4, label: 'Dashboards en tiempo real de métricas clave' },
              { value: 5, label: 'Command center: cada proceso visible 24/7 con alertas' }
            ]
          },
          {
            id: 'd2',
            text: '¿Toda la empresa puede ver métricas importantes?',
            options: [
              { value: 1, label: 'Solo gerencia ve números, resto no sabe' },
              { value: 2, label: 'Se comparten algunos números en reuniones' },
              { value: 3, label: 'Reportes periódicos compartidos con todos' },
              { value: 4, label: 'Dashboards accesibles para todo el equipo' },
              { value: 5, label: 'Transparencia total: todos ven todo en tiempo real' }
            ]
          },
          {
            id: 'd3',
            text: '¿Puede tomar decisiones basadas en datos en tiempo real?',
            options: [
              { value: 1, label: 'Decisiones por intuición, sin datos' },
              { value: 2, label: 'Revisamos datos históricos ocasionalmente' },
              { value: 3, label: 'Reportes regulares informan decisiones' },
              { value: 4, label: 'Data en tiempo real disponible para decidir' },
              { value: 5, label: 'Decisiones automáticas basadas en data streaming' }
            ]
          }
        ]
      },
      {
        id: 'experimentation',
        name: 'Experimentation',
        shortName: 'Experimentación',
        icon: '🔬',
        color: '#a855f7',
        category: 'ideas',
        description: 'Cultura de experimentación rápida y metodología lean startup',
        questions: [
          {
            id: 'exp1',
            text: '¿Experimenta regularmente con nuevas ideas/productos?',
            options: [
              { value: 1, label: 'Nunca probamos cosas nuevas, muy riesgoso' },
              { value: 2, label: 'Muy ocasionalmente, después de mucho análisis' },
              { value: 3, label: 'Probamos algunas innovaciones al año' },
              { value: 4, label: 'Cultura de experimentación: varios pilotos simultáneos' },
              { value: 5, label: 'Lean startup: 10+ experimentos/mes, iteración rápida' }
            ]
          },
          {
            id: 'exp2',
            text: '¿Cuál es su tolerancia al fracaso de experimentos?',
            options: [
              { value: 1, label: 'Fracasar es inaceptable, castigo' },
              { value: 2, label: 'Se tolera pero con mucha explicación' },
              { value: 3, label: 'Se entiende que algunos experimentos fallan' },
              { value: 4, label: 'Fallar rápido es celebrado si aprendemos' },
              { value: 5, label: 'Cultura: "Fail fast, learn faster" - se premia experimentar' }
            ]
          },
          {
            id: 'exp3',
            text: '¿Usa metodología científica para probar hipótesis?',
            options: [
              { value: 1, label: 'No, solo probamos y vemos qué pasa' },
              { value: 2, label: 'Análisis básico post-implementación' },
              { value: 3, label: 'Definimos objetivos antes de probar' },
              { value: 4, label: 'Hipótesis, métricas, experimentos controlados' },
              { value: 5, label: 'A/B testing, MVPs, pivot sistemático basado en data' }
            ]
          }
        ]
      },
      {
        id: 'autonomy',
        name: 'Autonomy',
        shortName: 'Autonomía',
        icon: '🦅',
        color: '#f97316',
        category: 'ideas',
        description: 'Equipos autónomos y multidisciplinarios con autoridad para decidir',
        questions: [
          {
            id: 'au1',
            text: '¿Sus equipos pueden tomar decisiones sin aprobación gerencial?',
            options: [
              { value: 1, label: 'Todo debe ser aprobado por gerencia/dueño' },
              { value: 2, label: 'Decisiones menores pueden tomarse solas' },
              { value: 3, label: 'Equipos tienen autonomía en su área con presupuesto' },
              { value: 4, label: 'Equipos autónomos con OKRs, deciden cómo lograrlos' },
              { value: 5, label: 'Auto-organización total: equipos son mini-empresas' }
            ]
          },
          {
            id: 'au2',
            text: '¿Tiene equipos multidisciplinarios vs departamentos verticales?',
            options: [
              { value: 1, label: 'Silos departamentales rígidos, sin colaboración' },
              { value: 2, label: 'Departamentos que ocasionalmente se juntan' },
              { value: 3, label: 'Equipos de proyecto temporal cross-funcional' },
              { value: 4, label: 'Squads permanentes multidisciplinarios por producto' },
              { value: 5, label: 'Organización plana: mini-equipos autónomos como startups' }
            ]
          },
          {
            id: 'au3',
            text: '¿Los colaboradores pueden proponer e implementar mejoras?',
            options: [
              { value: 1, label: 'No, solo siguen instrucciones' },
              { value: 2, label: 'Pueden sugerir pero rara vez se implementa' },
              { value: 3, label: 'Buzón de sugerencias, algunas se implementan' },
              { value: 4, label: 'Cualquiera puede proponer y liderar cambios' },
              { value: 5, label: 'Cultura de intraemprendimiento: presupuesto para experimentar' }
            ]
          }
        ]
      },
      {
        id: 'social',
        name: 'Social Technologies',
        shortName: 'Social Tech',
        icon: '💬',
        color: '#84cc16',
        category: 'ideas',
        description: 'Herramientas colaborativas para comunicación y gestión del conocimiento',
        questions: [
          {
            id: 'so1',
            text: '¿Usa herramientas colaborativas (Slack, Teams, Drive)?',
            options: [
              { value: 1, label: 'Email y llamadas telefónicas solamente' },
              { value: 2, label: 'WhatsApp grupos básicos' },
              { value: 3, label: 'Google Drive/Dropbox para compartir archivos' },
              { value: 4, label: 'Slack/Teams, Drive, herramientas de proyecto' },
              { value: 5, label: 'Stack completo: Notion, Miro, Figma, colaboración async' }
            ]
          },
          {
            id: 'so2',
            text: '¿El conocimiento está documentado y accesible para todos?',
            options: [
              { value: 1, label: 'Conocimiento en cabezas de personas, se pierde al irse' },
              { value: 2, label: 'Algunos documentos dispersos en computadoras' },
              { value: 3, label: 'Carpetas compartidas con documentación básica' },
              { value: 4, label: 'Wiki/base de conocimiento organizada' },
              { value: 5, label: 'Knowledge management system: todo documentado, buscable, vivo' }
            ]
          },
          {
            id: 'so3',
            text: '¿Puede trabajar de manera asíncrona y remota efectivamente?',
            options: [
              { value: 1, label: 'Imposible, todo debe ser presencial sincrónico' },
              { value: 2, label: 'Ocasionalmente alguien trabaja remoto con dificultad' },
              { value: 3, label: 'Modelo híbrido funcional con herramientas básicas' },
              { value: 4, label: 'Trabajo remoto efectivo, async para muchas cosas' },
              { value: 5, label: 'Remote-first: equipos distribuidos globalmente, async por defecto' }
            ]
          }
        ]
      }
    ]
  };

  const handleResponse = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const calculateAttributeScore = (attribute) => {
    const questionIds = attribute.questions.map(q => q.id);
    const scores = questionIds.map(id => responses[id] || 0);
    const total = scores.reduce((a, b) => a + b, 0);
    return total;
  };

  const calculateCategoryScore = (category) => {
    if (category === 'mtp') {
      return calculateAttributeScore(exoAttributes.mtp);
    } else if (category === 'scale') {
      return exoAttributes.scale.reduce((sum, attr) => sum + calculateAttributeScore(attr), 0);
    } else if (category === 'ideas') {
      return exoAttributes.ideas.reduce((sum, attr) => sum + calculateAttributeScore(attr), 0);
    }
    return 0;
  };

  const calculateTotalScore = () => {
    const mtpScore = calculateCategoryScore('mtp');
    const scaleScore = calculateCategoryScore('scale');
    const ideasScore = calculateCategoryScore('ideas');
    return mtpScore + scaleScore + ideasScore;
  };

  const getMaxScoreByCategory = (category) => {
    if (category === 'mtp') return exoAttributes.mtp.questions.length * 5;
    if (category === 'scale') return exoAttributes.scale.reduce((sum, attr) => sum + (attr.questions.length * 5), 0);
    if (category === 'ideas') return exoAttributes.ideas.reduce((sum, attr) => sum + (attr.questions.length * 5), 0);
  };

  const getTotalMaxScore = () => {
    return getMaxScoreByCategory('mtp') + getMaxScoreByCategory('scale') + getMaxScoreByCategory('ideas');
  };

  const getExOLevel = (totalScore, maxScore) => {
    const percentage = (totalScore / maxScore) * 100;
    
    if (percentage < 20) return {
      level: 'Organización Lineal',
      color: '#ef4444',
      icon: '🐌',
      description: 'Estructura tradicional sin atributos exponenciales',
      recommendation: 'Urgente: Comenzar transformación hacia modelo ExO',
      actions: ['Definir MTP inspirador', 'Experimentar con 2-3 atributos ExO', 'Formar equipo de innovación'],
      nextLevel: 'Organización en Transición'
    };
    
    if (percentage < 40) return {
      level: 'Organización en Transición',
      color: '#f59e0b',
      icon: '🚶',
      description: 'Primeros atributos ExO implementados',
      recommendation: 'Acelerar: Expandir atributos y escalar experimentos',
      actions: ['Fortalecer MTP', 'Implementar 3-4 atributos más', 'Crear dashboards en tiempo real'],
      nextLevel: 'Organización Exponencial Emergente'
    };
    
    if (percentage < 60) return {
      level: 'Organización Exponencial Emergente',
      color: '#eab308',
      icon: '🏃',
      description: 'Varios atributos ExO funcionando',
      recommendation: 'Consolidar: Integrar todos los atributos',
      actions: ['Implementar atributos faltantes', 'Profundizar experimentación', 'Escalar comunidad'],
      nextLevel: 'Organización Exponencial'
    };
    
    if (percentage < 80) return {
      level: 'Organización Exponencial',
      color: '#3b82f6',
      icon: '🚀',
      description: 'Mayoría de atributos ExO implementados',
      recommendation: 'Optimizar: Perfeccionar y escalar',
      actions: ['Optimizar algoritmos/IA', 'Escalar comunidad globalmente', 'Mentoría a otros'],
      nextLevel: 'Organización Exponencial Líder'
    };
    
    return {
      level: 'Organización Exponencial Líder',
      color: '#10b981',
      icon: '🌟',
      description: '11 atributos ExO completamente integrados',
      recommendation: 'Mantener liderazgo e innovar',
      actions: ['Explorar nuevas tecnologías exponenciales', 'Crear ecosistema ExO', 'Impacto global'],
      nextLevel: 'Dominio Total'
    };
  };

  const getRadarData = () => {
    const allAttributes = [
      exoAttributes.mtp,
      ...exoAttributes.scale,
      ...exoAttributes.ideas
    ];
    
    return allAttributes.map(attr => ({
      attribute: attr.shortName,
      score: calculateAttributeScore(attr),
      fullMark: attr.questions.length * 5
    }));
  };

  const getBarData = () => {
    return [
      {
        name: 'MTP',
        score: calculateCategoryScore('mtp'),
        max: getMaxScoreByCategory('mtp'),
        color: '#8b5cf6'
      },
      {
        name: 'SCALE',
        score: calculateCategoryScore('scale'),
        max: getMaxScoreByCategory('scale'),
        color: '#10b981'
      },
      {
        name: 'IDEAS',
        score: calculateCategoryScore('ideas'),
        max: getMaxScoreByCategory('ideas'),
        color: '#3b82f6'
      }
    ];
  };

  const getAllAttributes = () => {
    return [exoAttributes.mtp, ...exoAttributes.scale, ...exoAttributes.ideas];
  };

  const getCurrentAttribute = () => {
    const allAttrs = getAllAttributes();
    return allAttrs[currentAttribute];
  };

  const isAttributeComplete = () => {
    const attr = getCurrentAttribute();
    return attr.questions.every(q => responses[q.id] !== undefined);
  };

  const progressPercentage = () => {
    const allAttrs = getAllAttributes();
    const totalQuestions = allAttrs.reduce((sum, attr) => sum + attr.questions.length, 0);
    const answeredQuestions = Object.keys(responses).length;
    return (answeredQuestions / totalQuestions) * 100;
  };

  const resetEvaluation = () => {
    setResponses({});
    setCurrentSection('intro');
    setCurrentAttribute(0);
    setShowResults(false);
    setCompanyName('');
    setSector('');
  };

  // --- Componentes de UI ---

  // Intro Screen
  if (currentSection === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Rocket className="text-purple-600" size={64} />
              <h1 className="text-6xl font-bold text-gray-800">ExO Canvas</h1>
            </div>
            <p className="text-2xl text-gray-600 mb-2">Evaluación de Organización Exponencial</p>
            <p className="text-lg text-gray-500">Sector Productivo: Agrícola, Acuícola y Agroindustrial</p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es el ExO Canvas?</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              El <strong>ExO Canvas</strong> es un marco de trabajo desarrollado por Salim Ismail que identifica 
              los <strong>11 atributos</strong> que hacen que una organización pueda escalar exponencialmente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 text-center">
                <Target className="mx-auto text-purple-600 mb-2" size={32} />
                <p className="font-bold text-gray-800">MTP</p>
                <p className="text-sm text-gray-600">Propósito Masivo Transformador</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <Zap className="mx-auto text-green-600 mb-2" size={32} />
                <p className="font-bold text-gray-800">SCALE</p>
                <p className="text-sm text-gray-600">5 atributos externos</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <Brain className="mx-auto text-blue-600 mb-2" size={32} />
                <p className="font-bold text-gray-800">IDEAS</p>
                <p className="text-sm text-gray-600">5 atributos internos</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Nombre de su empresa:
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-lg"
                placeholder="Ej: AgroTech Innovación S.A."
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Sector (Agrícola, Acuícola, Agroindustrial, Otro):
              </label>
              <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-lg"
                placeholder="Ej: Acuícola"
              />
            </div>
          </div>

          <button
            onClick={() => {
              if (companyName && sector) {
                setCurrentSection('quiz');
              } else {
                alert('Por favor, ingrese el nombre de la empresa y el sector.');
              }
            }}
            className="w-full bg-green-600 text-white font-bold text-xl py-3 rounded-xl hover:bg-green-700 transition duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            Comenzar Evaluación <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (currentSection === 'quiz') {
    const currentAttr = getCurrentAttribute();
    const allAttrs = getAllAttributes();
    const totalAttrs = allAttrs.length;
    const attrIndex = currentAttribute;

    return (
      <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Evaluación ExO Canvas</h2>
            <p className="text-xl text-purple-600 font-semibold">{companyName} ({sector})</p>
          </div>

          {/* Progreso Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
              <span>Progreso: Atributo {attrIndex + 1} de {totalAttrs}</span>
              <span>{Math.round(progressPercentage())}% Completado</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage()}%` }}
              ></div>
            </div>
          </div>

          {/* Atributo Actual */}
          <div className={`border-l-4 p-6 rounded-xl mb-8`} style={{ borderColor: currentAttr.color, backgroundColor: currentAttr.color + '10' }}>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-3">
              <span className="text-3xl">{currentAttr.icon}</span> {currentAttr.name}
            </h3>
            <p className="text-gray-700 text-lg">{currentAttr.description}</p>
            <p className={`text-sm font-semibold mt-2`} style={{ color: currentAttr.color }}>
              Categoría: {currentAttr.category.toUpperCase()}
            </p>
          </div>

          {/* Preguntas */}
          <div className="space-y-8">
            {currentAttr.questions.map((q, qIndex) => (
              <div key={q.id} className="bg-white p-6 border border-gray-200 rounded-xl shadow-md">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  {attrIndex + 1}.{qIndex + 1}. {q.text}
                </p>
                <div className="space-y-3">
                  {q.options.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleResponse(q.id, option.value)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition duration-200 
                        ${responses[q.id] === option.value
                          ? 'bg-blue-100 border-blue-500 font-bold text-blue-800 shadow-inner'
                          : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                      <span className="font-mono text-sm mr-2 py-0.5 px-2 rounded-full" style={{ backgroundColor: currentAttr.color, color: 'white' }}>{option.value}</span>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navegación */}
          <div className="mt-10 flex justify-between gap-4">
            <button
              onClick={() => setCurrentAttribute(prev => prev - 1)}
              disabled={currentAttribute === 0}
              className="px-6 py-3 bg-gray-300 text-gray-800 rounded-xl font-bold hover:bg-gray-400 transition duration-300 disabled:opacity-50 flex items-center gap-2"
            >
              <ChevronLeft size={20} /> Anterior
            </button>

            {currentAttribute < totalAttrs - 1 ? (
              <button
                onClick={() => {
                  if (isAttributeComplete()) {
                    setCurrentAttribute(prev => prev + 1);
                  } else {
                    alert('Por favor, responda todas las preguntas de este atributo antes de continuar.');
                  }
                }}
                className={`px-6 py-3 ${isAttributeComplete() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-xl font-bold transition duration-300 flex items-center gap-2`}
              >
                Siguiente <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={() => {
                  if (isAttributeComplete()) {
                    setCurrentSection('results');
                    setShowResults(true);
                  } else {
                    alert('Por favor, responda todas las preguntas de este atributo antes de ver los resultados.');
                  }
                }}
                className={`px-6 py-3 ${isAttributeComplete() ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-xl font-bold transition duration-300 flex items-center gap-2`}
              >
                Ver Resultados <Award size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  const totalScore = calculateTotalScore();
  const maxScore = getTotalMaxScore();
  const result = getExOLevel(totalScore, maxScore);
  const radarData = getRadarData();
  const barData = getBarData();
  const allAttributes = getAllAttributes();

  if (currentSection === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
          <header className="text-center mb-10">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2 flex items-center justify-center gap-3">
              <Award className="text-yellow-500" size={40} /> Resultados ExO Canvas
            </h1>
            <p className="text-xl text-gray-600">{companyName} | {sector}</p>
          </header>

          {/* Resumen del Nivel ExO */}
          <div className={`p-8 rounded-2xl mb-10 border-4`} style={{ borderColor: result.color, backgroundColor: result.color + '10' }}>
            <div className="flex items-center justify-between flex-wrap">
              <div>
                <h2 className="text-4xl font-extrabold mb-2" style={{ color: result.color }}>
                  {result.icon} Nivel Exponencial: {result.level}
                </h2>
                <p className="text-xl text-gray-700">{result.description}</p>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="text-xl font-bold text-gray-800">Puntuación Total:</p>
                <p className="text-5xl font-extrabold" style={{ color: result.color }}>
                  {totalScore} / {maxScore}
                </p>
              </div>
            </div>
          </div>

          {/* Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Radar Chart (Por Atributo) */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="text-purple-600" size={24} /> Puntuación por Atributo
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart outerRadius={120} width={500} height={500} data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="attribute" tick={{ fontSize: 12, fontWeight: 'bold' }} />
                  <PolarRadiusAxis angle={90} domain={[0, 5]} tickCount={6} />
                  <Radar name={companyName} dataKey="score" stroke={result.color} fill={result.color} fillOpacity={0.6} />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart (Por Categoría) */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart3 className="text-blue-600" size={24} /> Desglose por Categoría
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={barData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, maxScore * 0.4]} />
                  <Tooltip formatter={(value, name, props) => [`${value} / ${props.payload.max}`, 'Score']} />
                  <Legend />
                  <Bar dataKey="score" name="Puntuación Obtenida" fill="#8884d8" barSize={40} onClick={(data) => console.log(data.name)} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recomendaciones y Próximos Pasos */}
          <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-500 mb-10">
            <h3 className="text-3xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
              <Lightbulb size={30} /> Próximos Pasos de Transformación
            </h3>
            <p className="text-xl text-gray-700 mb-4 font-semibold">Recomendación Clave: {result.recommendation}</p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
              {result.actions.map((action, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold text-gray-800 mt-6">
              Meta: Alcanzar el nivel de "{result.nextLevel}"
            </p>
          </div>

          {/* Desglose Detallado */}
          <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2 flex items-center gap-2">
            <Database className="text-gray-500" size={28} /> Desglose Detallado de Atributos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAttributes.map(attr => (
              <div key={attr.id} className="p-4 rounded-xl border-2 shadow-sm bg-white hover:shadow-md transition duration-300">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-lg font-bold" style={{ color: attr.color }}>
                    {attr.shortName} - {attr.name}
                  </p>
                  <span className="text-2xl">{attr.icon}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{attr.description}</p>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${(calculateAttributeScore(attr) / (attr.questions.length * 5)) * 100}%`,
                      backgroundColor: attr.color
                    }}
                  ></div>
                </div>
                <p className="text-right text-sm font-semibold mt-1">
                  {calculateAttributeScore(attr)} / {attr.questions.length * 5}
                </p>
              </div>
            ))}
          </div>

          {/* Botones de Acción */}
          <div className="mt-12 pt-6 border-t flex justify-center space-x-4">
            <button
              onClick={() => { /* Lógica para descargar PDF/JSON */ }}
              className="px-6 py-3 bg-gray-600 text-white rounded-xl font-bold hover:bg-gray-700 transition duration-300 flex items-center gap-2"
            >
              <Download size={20} /> Descargar Reporte
            </button>
            <button
              onClick={resetEvaluation}
              className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition duration-300 flex items-center gap-2"
            >
              <RefreshCw size={20} /> Nueva Evaluación
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ExOCanvasEvaluacion;