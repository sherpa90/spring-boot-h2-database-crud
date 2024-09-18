package com.bezkoder.spring.jpa.h2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.bezkoder.spring.jpa.h2.model.Tutorial;
import com.bezkoder.spring.jpa.h2.repository.TutorialRepository;
import com.bezkoder.spring.jpa.h2.exception.ResourceNotFoundException;

@Controller
@RequestMapping("/tutorials")
public class TutorialController {

    @Autowired
    private TutorialRepository tutorialRepository;

    @GetMapping
    public String listTutorials(Model model) {
        List<Tutorial> tutorials = tutorialRepository.findAll();
        model.addAttribute("tutorials", tutorials);
        return "index";
    }

    @GetMapping("/new")
    public String createTutorialForm(Model model) {
        model.addAttribute("tutorial", new Tutorial());
        return "tutorial_form";
    }

    @PostMapping("/save")
    public String saveTutorial(@ModelAttribute Tutorial tutorial) {
        tutorialRepository.save(tutorial);
        return "redirect:/tutorials";
    }

    @GetMapping("/edit/{id}")
    public String editTutorialForm(@PathVariable("id") long id, Model model) {
        Tutorial tutorial = tutorialRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tutorial not found with id " + id));
        model.addAttribute("tutorial", tutorial);
        return "tutorial_form";
    }

    @PostMapping("/update/{id}")
    public String updateTutorial(@PathVariable("id") Long id, @ModelAttribute Tutorial tutorial) {
        if (!tutorialRepository.existsById(id)) {
            throw new ResourceNotFoundException("Tutorial not found with id " + id);
        }
        tutorial.setId(id); // Solo necesario si 'id' no se establece automáticamente
        tutorialRepository.save(tutorial);
        return "redirect:/tutorials";
    }

    @GetMapping("/delete/{id}")
    public String deleteTutorial(@PathVariable("id") long id) {
        if (!tutorialRepository.existsById(id)) {
            throw new ResourceNotFoundException("Tutorial not found with id " + id);
        }
        tutorialRepository.deleteById(id);
        return "redirect:/tutorials";
    }
}
